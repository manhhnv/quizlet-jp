import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { SetEntity } from './set.entity';
import { Set, SetCreate, SetUpdate } from '../graphql';
import { CardService } from './card/card.service';

@Injectable()
export class SetService {
  constructor(
    private cardService: CardService,
    @InjectRepository(SetEntity)
    private setRepository: Repository<SetEntity>,
  ) {
  }

  async createSet(newSet: SetCreate, userId: string): Promise<Set> {
    const totalCards = newSet.cards.length;

    const set = await this.setRepository.save({
      userId: userId,
      title: newSet.title,
      description: newSet.description,
      password: newSet.password ? newSet.password : '',
      visible: newSet.visible,
      editable: newSet.editable,
      totalCards: totalCards,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.cardService.importCardsToSet(set.id, newSet.cards);

    return { ...set, cards: await this.cardService.getCards(set.id) };
  }


  async updateSet(setId: string, update: SetUpdate, userId: string): Promise<Set> {
    const { cards, ...updateData } = update;

    const totalCards = await this.cardService.countCards(setId);

    if (cards && cards.length != 0) {
      await this.cardService.removeAllCards(setId);
      await this.cardService.importCardsToSet(setId, cards);
    }

    await this.setRepository.update({ id: setId },
      {
        ...updateData,
        totalCards: cards ? cards.length : totalCards,
        updatedAt: new Date(),
      });

    const set = await this.setRepository.findOne({ id: setId });

    return { ...set, cards: await this.cardService.getCards(setId) };
  }
}
