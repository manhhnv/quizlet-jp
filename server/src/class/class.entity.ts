import { Class, ClassMember, ClassOption } from 'src/graphql';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FolderEntity } from 'src/folder/folder.entity';
import { SetEntity } from 'src/set/set.entity';
import { UserEntity } from 'src/user/user.entity';

@Entity({ name: 'classes' })
export class ClassEntity extends Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  className: string;
  @Column()
  description: string;
  @Column()
  option: ClassOption;
  @Column()
  school: string;
  @Column()
  link: string;
  @UpdateDateColumn()
  updatedAt: Date;
  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToOne(() => UserEntity, user => user.id)
  creator: UserEntity;
  sets: SetEntity[];
  folders: FolderEntity[];
  members: ClassMember[];
}