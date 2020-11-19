import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Card, Set, SetInput, User } from '../graphql';
import { getRepository, In } from 'typeorm';
import { CardService } from './card/card.service';
import { Repository } from 'typeorm/repository/Repository';
import { Injectable } from '@nestjs/common';
import { SetEntity } from './set.entity';
import { FolderSetEntity } from '../folder/folder-set/folder-set.entity';

@Injectable()
export class SetService {
  constructor(
    private cardService: CardService,
    @InjectRepository(SetEntity)
    private setRepository: Repository<SetEntity>,
  ) {
  }

  async getSetById(setId: string): Promise<Set> {
    return await this.setRepository.findOne({ id: setId });
  }

  async getSetsByUserId(user: User): Promise<Set[]> {
    return await this.setRepository.find({ creator: user });
  }

  async getSets(setIds: string[]): Promise<Set[]> {
    if (setIds.length == 0) {
      return [];
    }
    return this.setRepository.find({ where: { id: In(setIds) } });
  }

  async createSet(data: SetInput, user: User): Promise<Set> {
    console.log(data);
    const set = await this.setRepository.save({
      creator: user,
      title: data.title,
      description: data.description,
      password: data.password ? data.password : '',
      visible: data.visible,
      editable: data.editable,
      totalCards: data.cards.length,
      termLanguage: data.termLanguage,
      definitionLanguage: data.definitionLanguage,
    });

    return {
      ...set,
      cards: await this.cardService.importCardsToSet(set, data.cards),
    };
  }

  async updateSet(setId: string, data: SetInput, user: User): Promise<Set> {
    const { cards, ...update } = data;
    //TO DO : Chỉnh update = password hoặc check quyền
    const set = await this.setRepository.findOne({ id: setId });
    const totalCards = set.totalCards;
    let newCards: Card[];
    if (cards && cards.length != 0) {
      await this.cardService.removeAllCards(set);
      newCards = await this.cardService.importCardsToSet(set, cards);
    }

    await this.setRepository.update({ id: setId },
      {
        ...update,
        totalCards: cards ? cards.length : totalCards,
      });

    Object.keys(update).forEach(atr => {
      set[atr] = update[atr];
    });

    return { ...set, cards: newCards };
  }

  async deleteSet(setId: string, userId: string): Promise<boolean> {
    const set = await this.setRepository.findOne({ id: setId });
    if (set.creator.id == userId) {
      await this.setRepository.delete({ id: setId });
      await getRepository(FolderSetEntity).delete({ setId: setId });
      return true;
    }
    return false;
  };


}
