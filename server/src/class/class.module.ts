import { CFSModule } from './class-folder-set/cfs.module';
import { ClassEntity } from './class.entity';
import { ClassMemberModule } from './class-member/cm.module';
import { ClassResolver } from './class.resolver';
import { ClassService } from './class.service';
import { LogModule } from 'src/log/log.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LogModule,
    CFSModule,
    ClassMemberModule,
    TypeOrmModule.forFeature([ClassEntity])
  ],
  providers: [ClassService, ClassResolver]
})

export class ClassModule { }
