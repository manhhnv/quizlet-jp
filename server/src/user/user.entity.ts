import { User } from "src/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string
  @Column()
  @Index({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  birthday: string;
  @Column()
  updatedAt: string;
  @Column()
  createdAt: string;
  @Column()
  role: string;
}
