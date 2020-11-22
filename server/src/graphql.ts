
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ClassRole {
    Admin = "Admin",
    Member = "Member"
}

export enum ClassOption {
    CanContribute = "CanContribute",
    LearnOnly = "LearnOnly"
}

export enum Action {
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    UPDATE = "UPDATE",
    CREATE = "CREATE",
    DELETE = "DELETE",
    ADD = "ADD",
    REMOVE = "REMOVE",
    CHANGE_ROLE = "CHANGE_ROLE"
}

export enum Language {
    VietNam = "VietNam",
    English = "English"
}

export enum Visible {
    EveryOne = "EveryOne",
    CertainClasses = "CertainClasses",
    PeopleWithPassword = "PeopleWithPassword",
    Me = "Me"
}

export enum Editable {
    CertainClasses = "CertainClasses",
    PeopleWithPassword = "PeopleWithPassword",
    Me = "Me"
}

export class LoginInput {
    email: string;
    password: string;
}

export class RegisterInput {
    name: string;
    email: string;
    birthday: Date;
    password: string;
}

export class ClassCreate {
    className: string;
    description?: string;
    option: ClassOption;
    school?: string;
}

export class ClassUpdate {
    className?: string;
    description?: string;
    option?: ClassOption;
    school?: string;
}

export class FolderCreate {
    title: string;
    description: string;
}

export class FolderUpdate {
    title?: string;
    description?: string;
}

export class CardInput {
    term: string;
    definition: string;
}

export class SetCreate {
    title: string;
    description: string;
    visible: Visible;
    editable: Editable;
    password?: string;
    cards?: CardInput[];
    termLanguage?: Language;
    definitionLanguage?: Language;
}

export class SetUpdate {
    title?: string;
    description?: string;
    visible?: Visible;
    editable?: Editable;
    password?: string;
    cards?: CardInput[];
    termLanguage?: Language;
    definitionLanguage?: Language;
}

export class UserCreate {
    name: string;
    email: string;
    birthday: Date;
    password: string;
}

export class UserUpdate {
    name?: string;
    email?: string;
    birthday?: Date;
    password?: string;
}

export class UserToken {
    token: string;
    user: User;
}

export class ClassMember {
    id: string;
    name: string;
    role?: ClassRole;
}

export class Class {
    id: string;
    className: string;
    description: string;
    option: ClassOption;
    school: string;
    totalMembers: number;
    totalSets: number;
    totalFolders: number;
    members?: ClassMember[];
    folders?: Folder[];
    sets?: Set[];
    link: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Folder {
    id: string;
    title: string;
    description: string;
    creator: User;
    sets?: Set[];
    totalSets: number;
    updatedAt: Date;
    createdAt: Date;
}

export abstract class IMutation {
    abstract register(input: RegisterInput): UserToken | Promise<UserToken>;

    abstract login(input: LoginInput): UserToken | Promise<UserToken>;

    abstract logout(): boolean | Promise<boolean>;

    abstract update(input?: UserUpdate): User | Promise<User>;

    abstract joinClass(classId?: string): boolean | Promise<boolean>;

    abstract createSet(create?: SetCreate): Set | Promise<Set>;

    abstract updateSet(setId: string, update?: SetUpdate): Set | Promise<Set>;

    abstract deleteSet(setId: string): boolean | Promise<boolean>;

    abstract createFolder(create?: FolderCreate): Folder | Promise<Folder>;

    abstract updateFolder(folderId: string, update?: FolderUpdate): Folder | Promise<Folder>;

    abstract deleteFolder(folderId: string): boolean | Promise<boolean>;

    abstract addSetsToFolder(folderId?: string, setIds?: string[]): Folder | Promise<Folder>;

    abstract removeSetsFromFolder(folderId?: string, setIds?: string[]): Folder | Promise<Folder>;

    abstract createClass(create?: ClassCreate): Class | Promise<Class>;

    abstract updateClass(classId: string, update?: ClassUpdate): Class | Promise<Class>;

    abstract deleteClass(classId: string): boolean | Promise<boolean>;

    abstract addItems(classId: string, folderIds: string[], setIds: string[]): Class | Promise<Class>;

    abstract removeItems(classId: string, folderIds: string[], setIds: string[]): Class | Promise<Class>;

    abstract addMembers(classId: string, memberIds: string[]): Class | Promise<Class>;

    abstract setClassRole(classId: string, role: ClassRole, userId: string): Class | Promise<Class>;

    abstract removeMembers(classId: string, memberIds: string[]): Class | Promise<Class>;

    abstract invite(email?: string): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract set(setId?: string): Set | Promise<Set>;

    abstract sets(): Set[] | Promise<Set[]>;

    abstract folder(folderId?: string): Folder | Promise<Folder>;

    abstract folders(): Folder[] | Promise<Folder[]>;

    abstract class(classId?: string): Class | Promise<Class>;

    abstract classes(): Class[] | Promise<Class[]>;

    abstract userLog(): string[] | Promise<string[]>;
}

export class Card {
    id?: string;
    set?: Set;
    term?: string;
    orderNumber?: number;
    definition?: string;
}

export class Set {
    id: string;
    creator: User;
    title: string;
    description: string;
    visible: Visible;
    editable: Editable;
    password?: string;
    cards?: Card[];
    totalCards: number;
    createdAt: Date;
    updatedAt: Date;
    termLanguage?: Language;
    definitionLanguage?: Language;
}

export class User {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
    birthday: Date;
    createdAt: Date;
    updatedAt: Date;
}
