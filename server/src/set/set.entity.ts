import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Editable, Set, Visible } from '../graphql';
import { CardEntity } from "./card/card.entity";

@Entity("sets")
export class SetEntity extends Set {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  userId: string
  @Column()
  title: string
  @Column()
  description: string;
  @Column()
  password: string;
  @Column({ type: 'datetime' })
  updatedAt: Date;
  @Column({ type: 'datetime' })
  createdAt: Date;
  @Column({})
  totalCards: number;
  @Column()
  editable: Editable;
  @Column()
  visible: Visible;
  @OneToMany(() => CardEntity, (card: CardEntity) => card.setId)
  cards: CardEntity[];
}