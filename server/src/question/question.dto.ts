import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductDTO {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => Number)
  quantity: number;
}