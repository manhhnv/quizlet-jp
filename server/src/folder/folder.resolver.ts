import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';
import { FolderService } from './folder.service';
import { Folder, FolderInput, User } from '../graphql';
import { CtxUser } from '../options/decorators/ctx-user.decorator';

@Resolver()
export class FolderResolver {
  constructor(private folderService: FolderService) {
  }

  @Query(() => Folder)
  @UseGuards(GqlAuthGuard)
  async folder(@CtxUser() user: User,
    @Args('folderId') folderId: string): Promise<Folder> {
    return await this.folderService.getFolder(folderId);
  }

  @Query(() => [Folder])
  @UseGuards(GqlAuthGuard)
  async folders(@CtxUser() user: User): Promise<Folder[]> {
    return await this.folderService.getAllFoldersOfUser(user);
  }

  @Mutation(() => Folder)
  @UseGuards(GqlAuthGuard)
  async addSetsToFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string,
    @Args('setIds') setIds: string[]): Promise<Folder> {
    return await this.folderService.addSetsToFolder(folderId, setIds);
  }

  @Mutation(() => Folder)
  @UseGuards(GqlAuthGuard)
  async removeSetsFromFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string,
    @Args('setIds') setIds: string[]): Promise<Folder> {
    return await this.folderService.removeSetsFromFolder(folderId, setIds);
  }

  @Mutation(() => Folder)
  @UseGuards(GqlAuthGuard)
  async createFolder(@CtxUser() user: User, @Args('create') create: FolderInput): Promise<Folder> {
    return await this.folderService.createFolder(create, user);
  }

  @Mutation(() => Folder)
  @UseGuards(GqlAuthGuard)
  async updateFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string,
    @Args('update') update: FolderInput): Promise<Folder> {
    return await this.folderService.updateFolder(folderId, update, user);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteFolder(@CtxUser() user: User,
    @Args('folderId') folderId: string): Promise<boolean> {
    return await this.folderService.deleteFolder(folderId, user);
  }

}
