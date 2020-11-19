import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'class-folders-sets' })
export class CFSEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  classId: string;
  @Column()
  folderId: string;
  @Column()
  setId: string;
}


export class CFSClass {
  classId: string;
  folderId: string;
  setId: string;
}