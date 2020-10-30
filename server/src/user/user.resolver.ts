import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CtxUser } from 'src/decorators/ctx-user.decorator';
import { User, UserData } from 'src/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query()
  async users(): Promise<User[]> {
    return await this.userService.users();
  }

  @Query()
  @UseGuards()
  async me(@Context("user") user: User): Promise<User> {
    return user;
  };

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async update(@CtxUser() user: User, @Args('input') update: UserData): Promise<User> {
    return await this.userService.update(user, update);
  }
}

