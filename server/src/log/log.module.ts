import { LogEntity } from './log.entity';
import { LogResolver } from './log.resolver';
import { LogService } from './log.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LogEntity])
  ],
  providers: [LogService, LogResolver],
  exports: [LogService]
})
export class LogModule { }
