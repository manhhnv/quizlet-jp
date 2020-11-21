import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderEntity } from './folder.entity';
import { SetModule } from '../set/set.module';

import { FolderService } from './folder.service';
import { FolderResolver } from './folder.resolver';
import { FolderSetModule } from './folder-set/folder-set.module';


@Module({
  imports: [
    SetModule,
    FolderSetModule,
    TypeOrmModule.forFeature([FolderEntity]),
  ],
  providers: [FolderService, FolderResolver],
})

export class FolderModule {
}
