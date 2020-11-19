import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class, ClassInput } from 'src/graphql';
import { Repository } from 'typeorm';
import { CFSService } from './class-folder-set/cfs.service';
import { ClassMemberService } from './class-member/cm.service';
import { ClassEntity } from './class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassEntity)
    private classRepository: Repository<ClassEntity>,
    private cfsService: CFSService,
    private classMemberService: ClassMemberService
  ) { }


  // async getClass(classId: string): Promise<Class> {
  //   const cfsService

  //   this.classRepository.findOne({ id: classId });

  // }


  // async getClassOfUser(userId: string): Promise<Class[]> {

  // }


  // async createClass(data: ClassInput, user: User): Promise<Class> {
  //   const result = await this.classRepository.save({
  //     ...data,
  //     totalMembers: 1,
  //     totalSets: 0,
  //     totalFolders: 0,
  //     link: Math.random().toString(36).substring(7),
  //   });
  //   return this.getClass(result.id);
  // }

  // async updateClass(classId: string, data: ClassInput, user: User): Promise<Class> {

  // }

  // async deleteClass(classId: string, user: User): Promise<boolean> {
  //   if (1 + 1 == 2) {
  //     this.classRepository.delete({ id: classId });
  //     return true;
  //   }
  //   return false;
  // }



}
