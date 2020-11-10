import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { CardEntity } from './card/card.entity';
import { SetEntity } from './set.entity';

@Injectable()
export class SetService {
  constructor(
    @InjectRepository(SetEntity)
    private setRepository: Repository<SetEntity>,
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>
  ) { }


  // async createSet(newSet: CreateSetInput, userId: string) {
  //   // this.setRepository.create({  });
  //   const { cards, ...setData } = newSet;
  //   const totalCards = cards.length;
  //   const set = await this.setRepository.insert({
  //     userId: userId,
  //     title: setData.title,
  //     description: setData.description,
  //     password: setData.password ? setData.password : "",
  //     viewAble: setData.viewAble,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   });
  //   return set;
  // }

}
