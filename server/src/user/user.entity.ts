import { User } from "src/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string
  @Column()
  @Index({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ type: 'date' })
  birthday: Date;
  @Column({ type: 'datetime' })
  updatedAt: Date;
  @Column({ type: 'datetime' })
  createdAt: Date;
  @Column()
  role: string;
}
