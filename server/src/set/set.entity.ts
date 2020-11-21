import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Editable, Language, Set, User, Visible } from '../graphql';
import { CardEntity } from './card/card.entity';
import { UserEntity } from '../user/user.entity';

@Entity('sets')
export class SetEntity extends Set {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => UserEntity, { eager: true })
  creator: User;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  password: string;
  @UpdateDateColumn()
  updatedAt: Date;
  @CreateDateColumn()
  createdAt: Date;
  @Column({})
  totalCards: number;
  @Column()
  editable: Editable;
  @Column()
  visible: Visible;
  @Column()
  definitionLanguage: Language;
  @Column()
  termLanguage: Language;
  @OneToMany(() => CardEntity, card => card.set, { eager: true })
  cards: CardEntity[];
}