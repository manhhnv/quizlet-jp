import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
  } from 'typeorm';
  @Entity('products')
  export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 20, })
    name: string;

    @Column({type: 'int', default: 0})
    quantity: number;

  }