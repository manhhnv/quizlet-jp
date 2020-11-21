import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { CtxUser } from 'src/options/decorators/ctx-user.decorator';
import { Set, SetCreate, SetUpdate, User } from 'src/graphql';
import { SetService } from './set.service';

@Resolver()
export class SetResolver {
  constructor(private setService: SetService) {
  }

  @Mutation(() => Set)
  @UseGuards(GqlAuthGuard)
  async createSet(@CtxUser() user: User, @Args('create') data: SetCreate): Promise<Set> {
    return await this.setService.createSet(data, user.id);
  }

  @Mutation(() => Set)
  @UseGuards(GqlAuthGuard)
  async updateSet(@CtxUser() user: User, @Args('setId') setId: string,
                  @Args('update') data: SetUpdate): Promise<Set> {
    return await this.setService.updateSet(setId, data, user.id);
  }
}