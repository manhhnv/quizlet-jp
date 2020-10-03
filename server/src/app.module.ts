import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
  }), ItemModule, QuestionModule],
})
export class AppModule {}