import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClassMemberEntity } from "./cm.entity";


@Injectable()
export class ClassMemberService {
  constructor(
    @InjectRepository(ClassMemberEntity)
    private classMemberRepository: Repository<ClassMemberEntity>
  ) { }

}