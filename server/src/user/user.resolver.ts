import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CtxUser } from 'src/options/decorators/ctx-user.decorator';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { TokenGuard } from 'src/auth/token.guard';
import { UseGuards } from '@nestjs/common';
import { User, UserUpdate } from 'src/graphql';
import { UserService } from './user.service';

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
  async update(@CtxUser() user: User, @Args('input') update: UserUpdate): Promise<User> {
    return await this.userService.update(user, update);
  }
}

