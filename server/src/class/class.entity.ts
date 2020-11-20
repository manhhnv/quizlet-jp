import { FolderEntity } from 'src/folder/folder.entity';
import { Class, ClassMember, ClassOption } from 'src/graphql';
import { SetEntity } from 'src/set/set.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
  @Column({ type: "smallint", default: 1 })
  totalMembers: number;
  @Column({ type: "smallint", default: 0 })
  totalFolders: number;
  @Column({ type: "smallint", default: 0 })
  totalSets: number;
  @ManyToOne(() => UserEntity, user => user.id)
  creator: UserEntity;
  sets: SetEntity[];
  folders: FolderEntity[];
  members: ClassMember[];
}