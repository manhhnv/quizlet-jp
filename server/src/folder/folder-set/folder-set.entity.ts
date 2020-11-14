import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'folder-set' })
export class FolderSetEntity {
  @PrimaryColumn()
  folderId: string;
  @Column()
  setId: string;
}