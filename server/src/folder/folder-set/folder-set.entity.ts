import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'folder-set' })
export class FolderSetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  folderId: string;
  @Column()
  setId: string;
}