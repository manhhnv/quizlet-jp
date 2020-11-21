import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity({ name: 'tokens' })
export class TokenEntity {
  @PrimaryColumn()
  token: string;
  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToOne(() => UserEntity, user => user.id, { onDelete: "CASCADE" })
  user: UserEntity;
}