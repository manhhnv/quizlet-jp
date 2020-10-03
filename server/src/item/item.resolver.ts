import { ItemEntity } from './item.entity';
import { Item } from './item.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { ItemDTO } from './item.dto';
import { ItemService } from './item.service';
import { Field, ArgsType } from '@nestjs/graphql';
@ArgsType()
class ItemType {
  @Field({nullable: false})
  name: string
}
@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query(returns => ItemDTO)
  async item(): Promise<ItemDTO> {
    return await this.itemService.item();
  }
  @Mutation(returns => ItemDTO)
  async createItem(@Args() args: ItemType) {
    return this.itemService.createItem(args)
  }
}