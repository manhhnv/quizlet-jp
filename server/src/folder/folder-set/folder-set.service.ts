import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FolderSetEntity } from './folder-set.entity';

@Injectable()
export class FolderSetService {
  constructor(
    @InjectRepository(FolderSetEntity)
    private folderSetRepository: Repository<FolderSetEntity>,
  ) {
  }

  async getSetsOfFolder(folderId: string): Promise<FolderSetEntity[]> {
    return await this.folderSetRepository.find({ folderId: folderId });
  }

  async addSetsToFolder(folderId: string, setIds: string[]): Promise<boolean> {
    const folderSets = [];
    for (const setId of setIds) {
      folderSets.push({ folderId: folderId, setId: setId });
    }
    await this.folderSetRepository.insert(folderSets);
    return true;
  }

  async removeSetsFromFolder(folderId: string, setIds: string[]): Promise<boolean> {
    for (const setId of setIds) {
      await this.folderSetRepository.delete({ folderId: folderId, setId: setId });
    }
    return true;
  }

  async deleteFolder(folderId: string): Promise<boolean> {
    await this.folderSetRepository.delete({ folderId: folderId });
    return true;
  }
}