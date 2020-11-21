import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassMemberEntity } from './cm.entity';
import { ClassMemberService } from './cm.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClassMemberEntity])
  ],
  providers: [ClassMemberService],
  exports: [ClassMemberService]
})

export class ClassMemberModule { }
