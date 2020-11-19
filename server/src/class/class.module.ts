import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassResolver } from './class.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CFSModule } from './class-folder-set/cfs.module';
import { ClassMemberModule } from './class-member/cm.module';
import { ClassEntity } from './class.entity';

@Module({
  imports: [
    CFSModule,
    ClassMemberModule,
    TypeOrmModule.forFeature([ClassEntity])
  ],
  providers: [ClassService, ClassResolver]
})

export class ClassModule { }
