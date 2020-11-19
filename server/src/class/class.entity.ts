import { FolderEntity } from 'src/folder/folder.entity';
import { Class, ClassOption } from 'src/graphql';
import { SetEntity } from 'src/set/set.entity';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column()
  totalMembers: number;
  @Column()
  totalFolders: number;
  @Column()
  totalSets: number;

  members: UserEntity[]
  folders: [FolderEntity]
  sets: SetEntity[]
}