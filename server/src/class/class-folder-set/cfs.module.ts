import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderSetModule } from 'src/folder/folder-set/folder-set.module';
import { CFSEntity } from './cfs.entity';
import { CFSService } from './cfs.service';

@Module({
  imports: [
    FolderSetModule,
    TypeOrmModule.forFeature([CFSEntity])
  ],
  providers: [CFSService],
  exports: [CFSService]
})

export class CFSModule { }
