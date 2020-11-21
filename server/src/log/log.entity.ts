import { Action } from "src/graphql";
import { ClassEntity } from "src/class/class.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FolderEntity } from "src/folder/folder.entity";
import { SetEntity } from "src/set/set.entity";
import { UserEntity } from "src/user/user.entity";

@Entity({ name: "logs" })
export class LogEntity {
  @PrimaryGeneratedColumn()
  id: string
  @ManyToOne(() => UserEntity, user => user.id)
  user: UserEntity
  @ManyToOne(() => SetEntity, set => set.id)
  set: SetEntity
  @ManyToOne(() => FolderEntity, folder => folder.id)
  folder: FolderEntity
  @ManyToOne(() => ClassEntity, class_ => class_.id)
  class: ClassEntity
  @ManyToOne(() => UserEntity, user => user.id)
  member: UserEntity
  @CreateDateColumn()
  date: Date
  @Column()
  action: Action
}
