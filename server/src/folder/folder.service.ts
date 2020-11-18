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

  async getAllFoldersOfUser(user: User): Promise<Folder[]> {
    const folders = await this.folderRepository.find({ creator: user });
    for (let i = 0; i < folders.length; i++) {
      const folderSet = await this.folderSetService.getSetsOfFolder(folders[i].id);
      const setIds = folderSet.map(val => val.setId);
      folders[i].sets = await this.setService.getSets(setIds);
    }
    return folders;
  }

  async createFolder(create: FolderInput, user: User): Promise<Folder> {
    return await this.folderRepository.save({ ...create, totalSets: 0, creator: user });
  }

  async updateFolder(folderId: string, data: FolderInput, user: User): Promise<Folder> {
    await this.folderRepository.update({ id: folderId },
      {
        ...data,
      });
    return await this.folderRepository.findOne({ id: folderId });
  }

  async deleteFolder(folderId: string, user: User): Promise<boolean> {
    const folder = await this.folderRepository.findOne({ id: folderId });
    if (folder && folder.creator.id === user.id) {
      await this.folderRepository.delete({ id: folderId });
      await this.folderSetService.deleteFolder(folderId);
      return true;
    }
    return false;
  }

  async addSetsToFolder(folderId: string, setIds: string[]): Promise<boolean> {
    return await this.folderSetService.addSetsToFolder(folderId, setIds);
  }

  async removeSetsFromFolder(folderId: string, setIds: string[]): Promise<boolean> {
    

    return await this.folderSetService.removeSetsFromFolder(folderId, setIds);
  }

  async getFolder(folderId: string): Promise<Folder> {
    const folder = await this.folderRepository.findOne({ id: folderId });
    const folderSet = await this.folderSetService.getSetsOfFolder(folderId);
    const setIds = folderSet.map(val => val.setId);
    folder.sets = await this.setService.getSets(setIds);
    return folder;
  }
}
