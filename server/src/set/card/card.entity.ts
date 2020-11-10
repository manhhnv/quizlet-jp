import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Card, Language } from '../../graphql';

@Entity('cards')
export class CardEntity extends Card {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  userId: string;
  @Column()
  setId: string;
  @Column()
  term: string;
  @Column()
  termLanguage: Language;
  @Column()
  definition: string;
  @Column()
  definitionLanguage: Language;
  @Column({ type: 'datetime' })
  updatedAt: Date;
  @Column({ type: 'datetime' })
  createdAt: Date;
}