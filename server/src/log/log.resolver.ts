import { CtxUser } from 'src/options/decorators/ctx-user.decorator';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { LogService } from './log.service';
import { Query, Resolver } from '@nestjs/graphql';
import { TokenGuard } from 'src/auth/token.guard';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/graphql';

@Resolver()
export class LogResolver {
  constructor(private logService: LogService) { }

  @Query(() => [String])
  @UseGuards(TokenGuard, GqlAuthGuard)
  async userLog(@CtxUser() user: User): Promise<string[]> {
    return await this.logService.getLogOfUser(user);
  }


  // @Query(() => [String])
  // @UseGuards(TokenGuard, GqlAuthGuard)
  // async setLog(@CtxUser() user: User, classId: string): Promise<string[]> {
  //   return await this.logService.getClassLog();
  // }

  // @Query(() => [String])
  // @UseGuards(TokenGuard, GqlAuthGuard)
  // async classLog(@CtxUser() user: User, classId: string): Promise<string[]> {
  //   return await this.logService.getClassLog();
  // }


  // @Query(() => [String])
  // @UseGuards(TokenGuard, GqlAuthGuard)
  // async classLog(@CtxUser() user: User, classId: string): Promise<string[]> {
  //   return await this.logService.getClassLog();
  // }


}
