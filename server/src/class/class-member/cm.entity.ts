import { ClassRole } from 'src/graphql';
import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClassEntity } from '../class.entity';

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





