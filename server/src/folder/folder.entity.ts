import { Folder } from '../graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SetEntity } from '../set/set.entity';

@Entity({ name: 'folders' })
export class FolderEntity extends Folder {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column()
  title: string;
  @Column()
  creator: string;
  @Column({ type: 'datetime' })
  updatedAt: Date;
  @Column({ type: 'datetime' })
  createdAt: Date;
  @Column()
  totalSets: number;
  @OneToMany(() => SetEntity,
    (set: SetEntity) => set.id)
  sets: SetEntity[];
}