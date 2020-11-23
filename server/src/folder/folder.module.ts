import { FolderEntity } from './folder.entity';
import { FolderSetModule } from './folder-set/folder-set.module';
import { Module } from '@nestjs/common';
import { SetModule } from '../set/set.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FolderResolver } from './folder.resolver';
import { FolderService } from './folder.service';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [
    SetModule,
    LogModule,
    FolderSetModule,
    TypeOrmModule.forFeature([FolderEntity]),
  ],
  providers: [FolderService, FolderResolver],
})
export class FolderModule { }
