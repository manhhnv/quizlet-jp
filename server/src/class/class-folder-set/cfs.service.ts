import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderSetService } from 'src/folder/folder-set/folder-set.service';
import { FolderEntity } from 'src/folder/folder.entity';
import { SetEntity } from 'src/set/set.entity';
import { Repository } from 'typeorm';
import { ClassEntity } from '../class.entity';
import { CFSEntity } from './cfs.entity';

@Injectable()
export class CFSService {
  constructor(
    @InjectRepository(CFSEntity)
    private cfsRepository: Repository<CFSEntity>,
    private folderSetService: FolderSetService
  ) { }

  async getFoldersAndSets(class_: ClassEntity): Promise<{ folders: FolderEntity[], sets: SetEntity[] }> {
    const CFSs = await this.cfsRepository.find({ class: class_ });
    const folders: FolderEntity[] = [];
    const sets: SetEntity[] = [];
    for (const CFS of CFSs) {
      if (CFS.folder) {
        folders.push(CFS.folder);
      } else if (CFS.set) {
        sets.push(CFS.set);
      }
    }
    return {
      folders: folders,
      sets: sets
    }
  }

  async countFoldersAndSets(class_: ClassEntity): Promise<{ totalSets: number, totalFolders: number }> {
    const CFSs = await this.cfsRepository.find({ class: class_ });
    let totalFolders = 0;
    let totalSets = 0;
    for (const CFS of CFSs) {
      if (CFS.folder) {
        totalFolders += 1;
        totalSets += CFS.folder.totalSets;
      } else if (CFS.set) {
        totalSets += 1;
      }
    }
    return {
      totalFolders: totalFolders,
      totalSets: totalSets
    }
  }

  async deleteClass(class_: ClassEntity): Promise<boolean> {
    await this.cfsRepository.delete({ class: class_ });
    return true;
  }

  async addItems(class_: ClassEntity, folders: FolderEntity[], sets: SetEntity[]): Promise<{ totalSets: number, totalFolders: number }> {
    const CFSs = await this.cfsRepository.find({ class: class_ });
    const currentFolders: string[] = [];
    const currentSets: string[] = []
    for (const CFS of CFSs) {
      if (CFS.set) {
        currentSets.push(CFS.set.id);
      } else if (CFS.folder) {
        currentFolders.push(CFS.folder.id);
      }
    }
    for (const folder of new Set(folders)) {
      if (!currentFolders.includes(folder.id))
        await this.cfsRepository.insert({ class: class_, folder: folder });
    }
    for (const set of new Set(sets)) {
      if (!currentSets.includes(set.id))
        await this.cfsRepository.insert({ class: class_, set: set });
    }
    return this.countFoldersAndSets(class_);
  }

  async removeItems(class_: ClassEntity, folders: FolderEntity[], sets: SetEntity[]): Promise<{ totalSets: number, totalFolders: number }> {
    for (const folder of folders) {
      await this.cfsRepository.delete({ class: class_, folder: folder });
    }
    for (const set of sets) {
      await this.cfsRepository.delete({ class: class_, set: set });
    }
    return this.countFoldersAndSets(class_);
  }


}