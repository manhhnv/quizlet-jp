import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Class, ClassCreate, ClassRole, ClassUpdate, User } from 'src/graphql';
import { ClassService } from './class.service';
import { CtxUser } from 'src/options/decorators/ctx-user.decorator';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { TokenGuard } from 'src/auth/token.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class ClassResolver {
  constructor(private classService: ClassService) { }

  @Query(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async class(@CtxUser() user: User, @Args("classId") classId: string): Promise<Class> {
    return await this.classService.getClass(classId);
  }

  @Query(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async classes(@CtxUser() user: User): Promise<Class[]> {
    return await this.classService.getClassesOfUser(user);
  }

  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async createClass(@CtxUser() user: User, @Args("create") data: ClassCreate): Promise<Class> {
    return await this.classService.createClass(data, user);
  }

  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async updateClass(@CtxUser() user: User,
    @Args("classId") classId: string,
    @Args("update") data: ClassUpdate): Promise<Class> {
    return await this.classService.updateClass(classId, data, user);
  }


  @Mutation(() => Boolean)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async deleteClass(@CtxUser() user: User, @Args("classId") classId: string): Promise<boolean> {
    return await this.classService.deleteClass(classId, user);
  }

  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async addItems(
    @CtxUser() user: User,
    @Args("classId") classId: string,
    @Args("folderIds") folderIds: string[],
    @Args("setIds") setIds: string[],
  ) {
    return await this.classService.addItems(classId, folderIds, setIds, user);
  }


  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async removeItems(
    @CtxUser() user: User,
    @Args("classId") classId: string,
    @Args("folderIds") folderIds: string[],
    @Args("setIds") setIds: string[],
  ): Promise<Class> {
    return await this.classService.removeItems(classId, folderIds, setIds, user);
  }

  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async addMembers(@CtxUser() user: User,
    @Args("classId") classId: string,
    @Args("memberIds") memberIds: string[]
  ): Promise<Class> {
    return await this.classService.addMembers(classId, memberIds, user);
  }

  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async removeMembers(@CtxUser() user: User,
    @Args("classId") classId: string,
    @Args("memberIds") memberIds: string[]
  ): Promise<Class> {
    return await this.classService.removeMembers(classId, memberIds, user);
  }

  @Mutation(() => Class)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async setClassRole(@CtxUser() user: User,
    @Args("classId") classId: string,
    @Args("userId") userId: string,
    @Args("role") classRole: ClassRole
  ): Promise<Class> {
    return await this.classService.setClassRole(classId, userId, classRole, user);
  }

}
