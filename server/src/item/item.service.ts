import { ItemType } from './item.type';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { ItemEntity } from './item.entity';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(ItemEntity)
    private itemRepo: Repository<ItemEntity>,
    @InjectConnection()
    private connection: Connection
  ) {}

  item() {
    return this.itemRepo.findOne({});
  }
  async createItem(input: any): Promise<ItemDTO | any> {
    const repository = this.connection.getRepository(ItemEntity);
    const item = new ItemEntity()
    item.name = input.name
    const res = await repository.save(item)
    return res
  }
}