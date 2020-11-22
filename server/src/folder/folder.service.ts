import { Action, Folder, FolderCreate, FolderUpdate, User } from '../graphql';
import { CFSEntity } from 'src/class/class-folder-set/cfs.entity';
import { FolderEntity } from './folder.entity';
import { FolderSetService } from './folder-set/folder-set.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { LogService } from 'src/log/log.service';
import { Repository, getRepository } from 'typeorm';
import { SetService } from '../set/set.service';

@Injectable()
export class FolderService {
  constructor(
    private setService: SetService,
    private logService: LogService,
    private folderSetService: FolderSetService,
    @InjectRepository(FolderEntity)
    private folderRepository: Repository<FolderEntity>,
  ) {
  }

  async createFolder(create: FolderCreate, user: User): Promise<Folder> {
    const folder = await this.folderRepository.save({ ...create, creator: user });
    await this.logService.addLog(user, null, folder, null, null, Action.CREATE);
    folder.sets = [];
    folder.totalSets = 0;
    return folder;
  }

  async updateFolder(folderId: string, data: FolderUpdate, user: User): Promise<Folder> {
    // TO DO : check quyen
    await this.folderRepository.update({ id: folderId }, { ...data, });
    const folder = await this.folderRepository.findOne({ id: folderId });
    await this.logService.addLog(user, null, folder, null, null, Action.UPDATE);
    folder.sets = (await this.folderSetService.getSetsOfFolder(folder)).map(fs => fs.set);
    return folder;
  }

  async deleteFolder(folderId: string, user: User): Promise<boolean> {
    const folder = await this.folderRepository.findOne({ id: folderId });
    if (folder && folder.creator.id === user.id) {
      await getRepository(CFSEntity).delete({ folder: folder });
      await this.folderSetService.deleteFolder(folder);
      await this.logService.addLog(user, null, folder, null, null, Action.DELETE);
      await this.folderRepository.delete({ id: folderId });
      return true;
    }
    return false;
  }

  async addSetsToFolder(folderId: string, setIds: string[], user: User): Promise<Folder> {
    const sets = await this.setService.getSets(setIds);
    const folder = await this.folderRepository.findOne(folderId);
    const totalSets = await this.folderSetService.addSetsToFolder(folder, sets);
    await this.folderRepository.update({ id: folderId }, { totalSets: totalSets });
    sets.forEach(async (set) => await this.logService.addLog(user, set, folder, null, null, Action.ADD));
    return this.getFolder(folderId);
  }

  async removeSetsFromFolder(folderId: string, setIds: string[], user: User): Promise<Folder> {
    const folder = await this.folderRepository.findOne(folderId);
    const sets = await this.setService.getSets(setIds);
    const totalSets = await this.folderSetService.removeSetsFromFolder(folder, sets);
    await this.folderRepository.update({ id: folderId }, { totalSets: totalSets });
    sets.forEach(async (set) => await this.logService.addLog(user, set, folder, null, null, Action.REMOVE));
    return this.getFolder(folderId);
  }

  async getFolder(folderId: string): Promise<Folder> {
    const folder = await this.folderRepository.findOne({ id: folderId });
    folder.sets = (await this.folderSetService.getSetsOfFolder(folder)).map(fs => fs.set);
    folder.totalSets = folder.sets.length;
    return folder;
  }

  async getAllFoldersOfUser(user: User): Promise<Folder[]> {
    const folders = await this.folderRepository.find({ creator: user });
    for (let i = 0; i < folders.length; i++) {
      folders[i].sets = (await this.folderSetService.getSetsOfFolder(folders[i])).map(fs => fs.set);
    }
    return folders;
  }
}
