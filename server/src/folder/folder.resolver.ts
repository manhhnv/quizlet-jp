import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CtxUser } from '../options/decorators/ctx-user.decorator';
import { Folder, FolderCreate, FolderUpdate, User } from '../graphql';
import { FolderService } from './folder.service';
import { GqlAuthGuard } from '../auth/auth.guard';
import { TokenGuard } from '../auth/token.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class FolderResolver {
  constructor(private folderService: FolderService) {
  }

  @Query(() => Folder)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async folder(@CtxUser() user: User,
    @Args('folderId') folderId: string): Promise<Folder> {
    return await this.folderService.getFolder(folderId);
  }

  @Query(() => [Folder])
  @UseGuards(TokenGuard, GqlAuthGuard)
  async folders(@CtxUser() user: User): Promise<Folder[]> {
    return await this.folderService.getAllFoldersOfUser(user);
  }

  @Mutation(() => Folder)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async addSetsToFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string,
    @Args('setIds') setIds: string[]): Promise<Folder> {
    return await this.folderService.addSetsToFolder(folderId, setIds, user);

  }

  @Mutation(() => Folder)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async removeSetsFromFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string,
    @Args('setIds') setIds: string[]): Promise<Folder> {
    return await this.folderService.removeSetsFromFolder(folderId, setIds, user);
  }

  @Mutation(() => Folder)
  @UseGuards(TokenGuard, GqlAuthGuard)
  async createFolder(@CtxUser() user: User, @Args('create') create: FolderCreate): Promise<Folder> {
    return await this.folderService.createFolder(create, user);
  }

  @Mutation(() => Folder)
  @UseGuards(GqlAuthGuard)
  async updateFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string,
    @Args('update') update: FolderUpdate): Promise<Folder> {
    return await this.folderService.updateFolder(folderId, update, user);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string): Promise<boolean> {
    return await this.folderService.deleteFolder(folderId, user);
  }

}
