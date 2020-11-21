import { AuthModule } from './auth/auth.module';
import { ClassModule } from './class/class.module';
import { FolderModule } from './folder/folder.module';
import { GraphQLModule } from '@nestjs/graphql';
import { LogModule } from './log/log.module';
import { Module } from '@nestjs/common';
import { SetModule } from './set/set.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

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
    LogModule,
  ],
  providers: [],
})

export class AppModule { }