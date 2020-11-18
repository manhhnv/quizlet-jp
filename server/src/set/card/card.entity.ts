import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from '../../graphql';
import { SetEntity } from '../set.entity';


@Entity('cards')
export class CardEntity extends Card {
  @PrimaryGeneratedColumn()
  id: string;
  @ManyToOne(
    () => SetEntity, (set) =>
      set.cards, { onDelete: 'CASCADE' })
  set: SetEntity;
  @Column()
  orderNumber: number;
  @Column()
  term: string;
  @Column()
  definition: string;
}