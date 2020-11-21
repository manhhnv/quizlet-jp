import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { CardEntity } from './card.entity';
import { SetEntity } from '../set.entity';
import { Card, CardInput } from '../../graphql';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {
  }

  async removeAllCards(set: SetEntity) {
    return await this.cardRepository.delete({ set: set });
  }

  async getCards(set: SetEntity): Promise<Card[]> {
    return this.cardRepository.find({ set: set });
  }

  async importCardsToSet(set: SetEntity, data: CardInput[]): Promise<Card[]> {
    const cards: Card[] = [];
    for (let i = 0; i < data.length; i++) {
      const card = {
        set: set,
        term: data[i].term,
        orderNumber: i,
        definition: data[i].definition,
      };
      cards.push(card);
    }
    await this.cardRepository.save(cards);
    return cards;
  }
}