import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { CardEntity } from './card.entity';
import { Card, CardInput } from '../../graphql';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {
  }

  async removeAllCards(setId: string) {
    return await this.cardRepository.delete({ setId: setId });
  }

  async getCards(setId: string): Promise<Card[]> {
    return this.cardRepository.find({ setId: setId });
  }

  async countCards(setId: string): Promise<number> {
    return (await this.cardRepository.find({ setId: setId })).length;
  }

  async importCardsToSet(setId: string, inputs: CardInput[]): Promise<void> {
    const cards: Card[] = [];
    for (let i = 0; i < inputs.length; i++) {
      const card = {
        setId: setId,
        term: inputs[i].term,
        orderNumber: i,
        definition: inputs[i].definition,
        termLanguage: inputs[i].termLanguage,
        definitionLanguage: inputs[i].definitionLanguage,
      };
      cards.push(card);
    }

    await this.cardRepository.save(cards);
  }


}