import { ClassEntity } from '../class.entity';
import { ClassRole } from 'src/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity({ name: 'class_member' })
export class ClassMemberEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @ManyToOne(() => ClassEntity, (c: ClassEntity) => c.id, { onDelete: "CASCADE", eager: true })
  class: ClassEntity;
  @ManyToOne(() => UserEntity, (user) => user.id, { onDelete: "CASCADE", eager: true })
  user: UserEntity;
  @Column()
  role: ClassRole
}





