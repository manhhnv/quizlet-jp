import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { ItemEntity } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}