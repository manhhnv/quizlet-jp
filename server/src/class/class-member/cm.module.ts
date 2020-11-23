import { ClassMemberEntity } from './cm.entity';
import { ClassMemberService } from './cm.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClassMemberEntity])
  ],
  providers: [ClassMemberService],
  exports: [ClassMemberService]
})

export class ClassMemberModule { }
