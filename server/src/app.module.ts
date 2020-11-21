import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SetModule } from './set/set.module';
import { AuthModule } from './auth/auth.module';
import { FolderModule } from './folder/folder.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
    }),
    AuthModule,
    UserModule,
    SetModule,
    FolderModule,
    ClassModule,
  ],
  providers: [],
})

export class AppModule { }