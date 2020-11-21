import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FolderEntity } from '../folder.entity';
import { SetEntity } from 'src/set/set.entity';

@Entity({ name: 'folder_set' })
export class FolderSetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => FolderEntity, folder => folder.id)
  folder: FolderEntity;
  @ManyToOne(() => SetEntity, set => set.id, { eager: true })
  set: SetEntity;
}