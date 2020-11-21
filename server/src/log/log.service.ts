import { Action } from 'src/graphql';
import { ClassEntity } from 'src/class/class.entity';
import { FolderEntity } from 'src/folder/folder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { LogEntity } from './log.entity';
import { Repository } from 'typeorm';
import { SetEntity } from 'src/set/set.entity';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity)
    private logRepository: Repository<LogEntity>
  ) { }


  async addLog(user: UserEntity, set: SetEntity, folder: FolderEntity, class_: ClassEntity, member: UserEntity, action: Action) {
    this.logRepository.insert({ user: user, class: class_, folder: folder, set: set, action: action });
  }

}
