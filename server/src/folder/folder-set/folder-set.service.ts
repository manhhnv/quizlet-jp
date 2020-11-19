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
    return this.folderSetRepository.find({ folderId: folderId });
  }

  async addSetsToFolder(folderId: string, setIds: string[]): Promise<boolean> {
    const currentFolderSets = await this.folderSetRepository.find({ folderId: folderId });
    const currentSetsOfFolder = currentFolderSets.map(fs => fs.setId);
    for (const setId of setIds) {
      if (!currentSetsOfFolder.includes(setId)) {
        await this.folderSetRepository.insert({ folderId: folderId, setId: setId });
      }
    }
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