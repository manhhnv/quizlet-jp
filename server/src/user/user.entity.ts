import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "src/graphql";

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
  @Column({ type: "date" })
  birthday: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  role: string;
}
