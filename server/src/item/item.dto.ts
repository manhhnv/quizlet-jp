import { ObjectType, Field, ID } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class ItemDTO {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => Date, {nullable: true})
  updatedAt?: Date | null;

  @Field(type => Date, {nullable: true})
  createdAt?: Date | null;
}