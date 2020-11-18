import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Folder, Set } from '../graphql';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'folders' })
export class FolderEntity extends Folder {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column()
  title: string;
  @ManyToOne(() => UserEntity, (folder) => folder.id, { eager: true })
  creator: UserEntity;
  @UpdateDateColumn()
  updatedAt: Date;
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  totalSets: number;
  sets: Set[];
}