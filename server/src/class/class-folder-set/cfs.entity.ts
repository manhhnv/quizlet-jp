import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FolderEntity } from 'src/folder/folder.entity';
import { SetEntity } from 'src/set/set.entity';
import { ClassEntity } from '../class.entity';

@Entity({ name: 'class_folder_set' })
export class CFSEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @ManyToOne(() => ClassEntity, (c) => c.id, { onDelete: "CASCADE", eager: true })
  class: ClassEntity;
  @ManyToOne(() => FolderEntity, (f) => f.id, { onDelete: "CASCADE", eager: true })
  folder: FolderEntity;
  @ManyToOne(() => SetEntity, (s) => s.id, { onDelete: "CASCADE", eager: true })
  set: SetEntity;
}


export class CFSClass {
  classId: string;
  folderId: string;
  setId: string;
}