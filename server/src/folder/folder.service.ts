import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderEntity } from './folder.entity';
import { SetService } from '../set/set.service';
import { Folder, FolderInput, User } from '../graphql';
import { FolderSetService } from './folder-set/folder-set.service';

@Injectable()
export class FolderService {
  constructor(
    private setService: SetService,
    private folderSetService: FolderSetService,
    @InjectRepository(FolderEntity)
    private folderRepository: Repository<FolderEntity>,
  ) {
  }

  async createFolder(create: FolderInput, user: User): Promise<Folder> {
    const folder = await this.folderRepository.save({ ...create, totalSets: 0, creator: user });
    folder.sets = (await this.folderSetService.getSetsOfFolder(folder)).map(fs => fs.set);
    return folder;
  }

  async updateFolder(folderId: string, data: FolderInput, user: User): Promise<Folder> {
    // TO DO : check quyen
    await this.folderRepository.update({ id: folderId }, { ...data, });
    return await this.getFolder(folderId);
  }

  async deleteFolder(folderId: string, user: User): Promise<boolean> {
    const folder = await this.folderRepository.findOne({ id: folderId });
    if (folder && folder.creator.id === user.id) {
      await this.folderRepository.delete({ id: folderId });
      await this.folderSetService.deleteFolder(folder);
      return true;
    }
    return false;
  }

  async addSetsToFolder(folderId: string, setIds: string[]): Promise<Folder> {
    const sets = await this.setService.getSets(setIds);
    const folder = await this.folderRepository.findOne(folderId);
    const totalSets = await this.folderSetService.addSetsToFolder(folder, sets);
    await this.folderRepository.update({ id: folderId }, { totalSets: totalSets });
    return this.getFolder(folderId);
  }

  async removeSetsFromFolder(folderId: string, setIds: string[]): Promise<Folder> {
    const folder = await this.folderRepository.findOne(folderId);
    const sets = await this.setService.getSets(setIds);
    const totalSets = await this.folderSetService.removeSetsFromFolder(folder, sets);
    await this.folderRepository.update({ id: folderId }, { totalSets: totalSets });
    return this.getFolder(folderId);
  }

  async getFolder(folderId: string): Promise<Folder> {
    const folder = await this.folderRepository.findOne({ id: folderId });
    folder.sets = (await this.folderSetService.getSetsOfFolder(folder)).map(fs => fs.set);
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
