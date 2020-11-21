import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClassMember, ClassRole } from "src/graphql";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { ClassEntity } from "../class.entity";
import { ClassMemberEntity } from "./cm.entity";

@Injectable()
export class ClassMemberService {
  constructor(
    @InjectRepository(ClassMemberEntity)
    private classMemberRepository: Repository<ClassMemberEntity>
  ) { }

  async countMember(class_: ClassEntity): Promise<number> {
    return this.classMemberRepository.count({ class: class_ });
  }

  async getMembers(class_: ClassEntity): Promise<ClassMember[]> {
    const classMemberEntity = await this.classMemberRepository.find({ class: class_ });
    return classMemberEntity.map((value) => {
      return {
        id: value.user.id,
        name: value.user.name,
        role: value.role
      }
    })
  }

  async getClassesOfUser(user: UserEntity): Promise<string[]> {
    const classes = await this.classMemberRepository.find({ user: user });
    return classes.map(value => value.class.id);
  }

  async addMembers(class_: ClassEntity, members: UserEntity[], role: ClassRole): Promise<number> {
    const currentMembers = (await this.classMemberRepository.find({ class: class_ })).map(val => val.user.id);
    for (const member of new Set(members)) {
      if (!currentMembers.includes(member.id)) {
        await this.classMemberRepository.insert({ class: class_, user: member, role: role })
      }
    }
    return this.countMember(class_);
  }

  async setMemberRole(class_: ClassEntity, user: UserEntity, role: ClassRole): Promise<ClassMember[]> {
    console.log(role);
    await this.classMemberRepository.update({ class: class_, user: user }, { role: role });
    return this.getMembers(class_);
  }

  async removeMembers(class_: ClassEntity, members: UserEntity[]): Promise<number> {
    for (const member of members) {
      await this.classMemberRepository.delete({ class: class_, user: member });
    }
    return this.countMember(class_);
  }

  async deleteClass(class_: ClassEntity): Promise<boolean> {
    await this.classMemberRepository.delete({ class: class_ });
    return true;
  }
}