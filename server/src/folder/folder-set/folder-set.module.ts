import { FolderSetEntity } from './folder-set.entity';
import { FolderSetService } from './folder-set.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([FolderSetEntity]),
  ],
  providers: [FolderSetService],
  exports: [FolderSetService],
})

export class FolderSetModule {
}
