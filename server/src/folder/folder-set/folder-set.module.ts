import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderSetService } from './folder-set.service';
import { FolderSetEntity } from './folder-set.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FolderSetEntity]),
  ],
  providers: [FolderSetService],
  exports: [FolderSetService],
})

export class FolderSetModule {
}
