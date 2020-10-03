import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  export declare type DeepPartial<T> = {
    [P in keyof T]?: null | (T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>);
};
  export abstract class QuizletEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date', default: null})
    createdAt: Date
    
    @Column({type: 'date', default: null})
    updatedAt: Date
  }
  @Entity('items')
  export class ItemEntity extends QuizletEntity{
  
    @Column({ type: 'varchar', length: 20 })
    name: string;

  }