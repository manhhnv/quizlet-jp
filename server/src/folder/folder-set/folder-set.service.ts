import { FolderEntity } from '../folder.entity';
import { FolderSetEntity } from './folder-set.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SetEntity } from 'src/set/set.entity';

@Injectable()
export class FolderSetService {
  constructor(
    @InjectRepository(FolderSetEntity)
    private folderSetRepository: Repository<FolderSetEntity>,
  ) {
  }

  async countSetsOfFolder(folder: FolderEntity): Promise<number> {
    return this.folderSetRepository.count({ folder: folder });
  }

  async getSetsOfFolder(folder: FolderEntity): Promise<FolderSetEntity[]> {
    const folderSet = await this.folderSetRepository.find({ folder: folder });
    return folderSet;
  }

  async addSetsToFolder(folder: FolderEntity, sets: SetEntity[]): Promise<number> {
    const currentFolderSets = await this.folderSetRepository.find({ folder: folder });
    const currentSetsOfFolder = currentFolderSets.map(fs => fs.set.id);
    const setIds = new Set(sets.map(set => set.id));
    for (const setId of setIds) {
      if (!currentSetsOfFolder.includes(setId)) {
        const set = sets.find(set => set.id == setId);
        await this.folderSetRepository.insert({ folder: folder, set: set });
      }
    }
    return this.countSetsOfFolder(folder);
  }

  async removeSetsFromFolder(folder: FolderEntity, sets: SetEntity[]): Promise<number> {
    for (const set of sets) {
      await this.folderSetRepository.delete({ folder: folder, set: set });
    }
    return this.countSetsOfFolder(folder);
  }

  async deleteFolder(folder: FolderEntity): Promise<boolean> {
    await this.folderSetRepository.delete({ folder: folder });
    return true;
  }
}