import { Action, Card, Set, SetCreate, SetUpdate, User } from '../graphql';
import { CFSEntity } from 'src/class/class-folder-set/cfs.entity';
import { CardService } from './card/card.service';
import { FolderSetEntity } from 'src/folder/folder-set/folder-set.entity';
import { In, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Injectable } from '@nestjs/common';
import { LogService } from 'src/log/log.service';
import { Repository } from 'typeorm/repository/Repository';
import { SetEntity } from './set.entity';

@Injectable()
export class SetService {
  constructor(
    private cardService: CardService,
    private logService: LogService,
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

  async getSets(setIds: string[]): Promise<SetEntity[]> {
    if (setIds.length == 0) {
      return [];
    }
    return this.setRepository.find({ where: { id: In(setIds) } });
  }

  async createSet(data: SetCreate, user: User): Promise<Set> {
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
    await this.logService.addLog(user, set, null, null, null, Action.CREATE);
    return {
      ...set,
      cards: await this.cardService.importCardsToSet(set, data.cards),
    };
  }

  async updateSet(setId: string, data: SetUpdate, user: User): Promise<Set> {
    const { cards, ...update } = data;
    //TO DO : Chỉnh update = password hoặc check quyền
    const set = await this.setRepository.findOne({ id: setId });
    const totalCards = set.totalCards;
    let newCards: Card[];
    if (cards && cards.length != 0) {
      await this.cardService.removeAllCards(set);
      newCards = await this.cardService.importCardsToSet(set, cards);
    }
    await this.setRepository.update({ id: setId }, { ...update, totalCards: cards ? cards.length : totalCards });
    await this.logService.addLog(user, set, null, null, null, Action.UPDATE);
    Object.keys(update).forEach(atr => {
      set[atr] = update[atr];
    });
    return { ...set, cards: newCards };
  }

  async deleteSet(setId: string, user: User): Promise<boolean> {
    const set = await this.setRepository.findOne({ id: setId });
    if (set.creator.id == user.id) {
      await getRepository(CFSEntity).delete({ set: set });
      await getRepository(FolderSetEntity).delete({ set: set });
      await this.logService.addLog(user, set, null, null, null, Action.DELETE);
      await this.setRepository.softDelete({ id: setId });
      return true;
    }
    return false;
  };
}
