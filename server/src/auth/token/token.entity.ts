import { User } from 'src/graphql';
import { UserEntity } from 'src/user/user.entity';
import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tokens' })
export class TokenEntity {
  @PrimaryColumn()
  token: string;
  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}