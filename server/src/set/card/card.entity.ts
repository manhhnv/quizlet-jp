import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Card, Language } from '../../graphql';

@Entity('cards')
export class CardEntity extends Card {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  setId: string;
  @Column()
  orderNumber: number;
  @Column()
  term: string;
  @Column()
  termLanguage: Language;
  @Column()
  definition: string;
  @Column()
  definitionLanguage: Language;
}