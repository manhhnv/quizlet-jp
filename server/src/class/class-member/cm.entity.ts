import { ClassRole } from 'src/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'class-member' })
export class ClassMemberEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  classId: string;
  @Column()
  userId: string;
  @Column()
  role: ClassRole
}





