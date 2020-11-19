import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CtxUser } from 'src/options/decorators/ctx-user.decorator';
import { User, UserData } from 'src/graphql';
import { UserService } from './user.service';
import { TokenGuard } from 'src/token.guard';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query()
  async users(): Promise<User[]> {
    return await this.userService.users();
  }

  @Query(() => User)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async me(@CtxUser() user: User): Promise<User> {
    return user;
  };

  @Mutation(() => User)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async update(@CtxUser() user: User, @Args('input') update: UserData): Promise<User> {
    return await this.userService.update(user, update);
  }
}

