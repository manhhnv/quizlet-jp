import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderEntity } from 'src/folder/folder.entity';
import { Class, ClassInput, ClassRole, ClassUpdate, User } from 'src/graphql';
import { SetEntity } from 'src/set/set.entity';
import { UserEntity } from 'src/user/user.entity';
import { getRepository, In, Repository } from 'typeorm';
import { CFSService } from './class-folder-set/cfs.service';
import { ClassMemberService } from './class-member/cm.service';
import { ClassEntity } from './class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassEntity)
    private classRepository: Repository<ClassEntity>,
    private classMemberService: ClassMemberService,
    private cfsService: CFSService,
  ) { }


  async getClass(classId: string): Promise<Class> {
    const class_ = await this.classRepository.findOne(classId);
    const members = await this.classMemberService.getMembers(class_);
    const { folders, sets } = await this.cfsService.getFoldersAndSets(class_);
    return { ...class_, members: members, folders: folders, sets: sets }
  }

  async getClassesOfUser(user: User): Promise<Class[]> {
    const classes: Class[] = [];
    const classIds = await this.classMemberService.getClassesOfUser(user);
    for (const classId of classIds) {
      classes.push(await this.getClass(classId));
    }
    return classes;
  }

  async createClass(data: ClassInput, user: User): Promise<Class> {
    const class_ = await this.classRepository.save({
      ...data,
      link: Math.random().toString(36).substring(7),
      creator: user
    });
    await this.classMemberService.addMembers(class_, [user], ClassRole.Admin);
    return { ...class_, sets: [], folders: [], members: await this.classMemberService.getMembers(class_) };
  }

  async updateClass(classId: string, data: ClassUpdate, user: User): Promise<Class> {
    await this.classRepository.update({ id: classId }, { ...data });
    return this.getClass(classId);
  }

  async deleteClass(classId: string, user: User): Promise<boolean> {
    const class_ = await this.classRepository.findOne(classId);
    if (class_.creator.id == user.id) {
      await this.classMemberService.deleteClass(class_);
      await this.cfsService.deleteClass(class_);
      await this.classRepository.delete(classId);
    }
    return false;
  }

  async addItems(classId: string, folderIds: string[], setIds: string[], user: UserEntity): Promise<Class> {
    const class_ = await this.classRepository.findOne(classId);
    const folders = await getRepository(FolderEntity).find({ where: { id: In(folderIds) } });
    const sets = await getRepository(SetEntity).find({ where: { id: In(setIds) } });
    const { totalSets, totalFolders } = await this.cfsService.addItems(class_, folders, sets);
    await this.classRepository.update({ id: classId }, { totalSets: totalSets, totalFolders: totalFolders });
    return this.getClass(classId);
  }

  async removeItems(classId: string, folderIds: string[], setIds: string[], user: UserEntity): Promise<Class> {
    const class_ = await this.classRepository.findOne(classId);
    const folders = await getRepository(FolderEntity).find({ where: { id: In(folderIds) } });
    const sets = await getRepository(SetEntity).find({ where: { id: In(setIds) } });
    const { totalSets, totalFolders } = await this.cfsService.removeItems(class_, folders, sets);
    await this.classRepository.update({ id: classId }, { totalSets: totalSets, totalFolders: totalFolders });
    return this.getClass(classId);
  }

  async addMembers(classId: string, memberIds: string[], user: UserEntity): Promise<Class> {
    const class_ = await this.classRepository.findOne(classId);
    const members = await getRepository(UserEntity).find({ where: { id: In(memberIds) } })
    const totalMembers = await this.classMemberService.addMembers(class_, members, ClassRole.Member);
    await this.classRepository.update({ id: classId }, { totalMembers: totalMembers });
    return this.getClass(classId);
  }

  async removeMembers(classId: string, memberIds: string[], user: UserEntity): Promise<Class> {
    const class_ = await this.classRepository.findOne(classId);
    const members = await getRepository(UserEntity).find({ where: { id: In(memberIds) } })
    const totalMembers = await this.classMemberService.removeMembers(class_, members);
    await this.classRepository.update({ id: classId }, { totalMembers: totalMembers });
    return this.getClass(classId);
  }

  async setClassRole(classId: string, userId: string, classRole: ClassRole, user: UserEntity) {
    console.log(classRole);
    const class_ = await this.classRepository.findOne(classId);
    const member = await getRepository(UserEntity).findOne({ id: userId });
    await this.classMemberService.setMemberRole(class_, member, classRole);
    return this.getClass(classId);
  }

}
