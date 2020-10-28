import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { User } from 'src/graphql';
import { LoginInputDto, UserDto } from './user.dto';
import { UserGuard } from './user.guard';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query()
  async users(): Promise<User[]> {
    return await this.userService.users();
  }

  @Query()
  @UseGuards(new UserGuard())
  async me(@Context("userId") id: number): Promise<User> {
    return await this.userService.findById(id);
  }

  @Query()
  async login(@Args('input') input: LoginInputDto): Promise<string> {
    return await this.userService.login(input.email, input.password);
  }

  @Mutation()
  async register(@Args('input') input: UserDto): Promise<string> {
    return await this.userService.register(input);
  }

  @Mutation()
  async update(
    @Args('id') id: number,
    @Args('input') input: UserDto): Promise<string> {
    return await this.userService.update(id, input);
  }
}

