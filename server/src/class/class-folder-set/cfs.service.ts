import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderSetService } from 'src/folder/folder-set/folder-set.service';
import { Repository } from 'typeorm';
import { CFSClass, CFSEntity } from './cfs.entity';

@Injectable()
export class CFSService {
  constructor(
    @InjectRepository(CFSEntity)
    private cfsRepository: Repository<CFSEntity>,
    private folderSetService: FolderSetService
  ) { }

  async getFoldersAndSets(classId: string): Promise<CFSEntity[]> {
    return this.cfsRepository.find({ classId: classId });
  }

  async countFoldersAndSets(classId: string): Promise<number> {
    return this.cfsRepository.count({ classId: classId });
  }

  async deleteClass(classId: string): Promise<boolean> {
    await this.cfsRepository.delete({ classId: classId });
    return true;
  }

  async addFolders(classId: string, folderIds: string[]) {
    const classFolderSet: CFSClass[] = [];
    for (const folderId of folderIds) {
      const folderSets = await this.folderSetService.getSetsOfFolder(folderId);
      folderSets.forEach(setOfFolder => {
        classFolderSet.push({ classId: classId, folderId: folderId, setId: setOfFolder.setId });
      });
    }
    await this.cfsRepository.save(classFolderSet);
  }

  async addSets(classId: string, setIds: string[]) {
    const classFolderSet: CFSClass[] = [];
    setIds.forEach(setId => {
      classFolderSet.push({ classId: classId, folderId: "", setId: setId });
    });
    await this.cfsRepository.save(classFolderSet);
  }

  async removeFolders(classId: string, folderIds: string[]): Promise<boolean> {
    for (const folderId of folderIds) {
      await this.cfsRepository.delete({ classId: classId, folderId: folderId });
    }
    return true;
  }

  async removeSets(classId: string, setIds: string[]): Promise<boolean> {
    for (const setId of setIds) {
      await this.cfsRepository.delete({ classId: classId, folderId: "", setId: setId });
    }
    return true;
  }

  async removeByFolder(folderId: string): Promise<boolean> {
    await this.cfsRepository.delete({ folderId: folderId });
    return true;
  }

  async removeBySet(setId: string): Promise<boolean> {
    await this.cfsRepository.delete({ setId: setId });
    return true;
  }
}