
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ClassOption {
    Contributable = "Contributable",
    LearnOnly = "LearnOnly"
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

export class ClassInput {
    className?: string;
    description?: string;
    option?: ClassOption;
    school?: string;
}

export class FolderInput {
    title: string;
    description: string;
}

export class CardInput {
    term: string;
    termLanguage: Language;
    definition: string;
    definitionLanguage: Language;
}

export class SetCreate {
    title: string;
    description: string;
    visible: Visible;
    editable: Editable;
    password?: string;
    cards?: CardInput[];
}

export class SetUpdate {
    title?: string;
    description?: string;
    visible?: Visible;
    editable?: Editable;
    password?: string;
    cards?: CardInput[];
}

export class UserData {
    name?: string;
    email?: string;
    birthday?: Date;
    password?: string;
}

export class UserToken {
    token: string;
    user: User;
}

export class Class {
    className?: string;
    description?: string;
    option?: ClassOption;
    school?: string;
    members?: User[];
    sets?: Set[];
    link?: string;
    admins?: string[];
}

export class Folder {
    id?: string;
    description?: string;
    title?: string;
    creator?: string;
    totalSets?: number;
    sets?: Set[];
    updateAt?: Date;
    createAt?: Date;
}

export abstract class IMutation {
    abstract register(input: RegisterInput): UserToken | Promise<UserToken>;

    abstract login(input?: LoginInput): UserToken | Promise<UserToken>;

    abstract update(input?: UserData): User | Promise<User>;

    abstract joinClass(classId?: string): boolean | Promise<boolean>;

    abstract createSet(create?: SetCreate): Set | Promise<Set>;

    abstract updateSet(setId?: string, update?: SetUpdate): Set | Promise<Set>;

    abstract createFolder(input?: FolderInput): Folder | Promise<Folder>;

    abstract updateFolder(input?: FolderInput): Folder | Promise<Folder>;

    abstract addSetToFolder(setId?: string, folderId?: string): Folder | Promise<Folder>;

    abstract removeSetFromFolder(setId?: string, folderId?: string): Folder | Promise<Folder>;

    abstract createClass(input?: ClassInput): Class | Promise<Class>;

    abstract updateClass(input?: ClassInput): Class | Promise<Class>;

    abstract deleteClass(classId?: string): boolean | Promise<boolean>;

    abstract addSetToClass(setId?: string, classId?: string): Set | Promise<Set>;

    abstract removeSetFromClass(setId?: string, classId?: string): boolean | Promise<boolean>;

    abstract addFolderToClass(folderId?: string, classId?: string): Folder | Promise<Folder>;

    abstract removeFolderFromClass(setId?: string, classId?: string): boolean | Promise<boolean>;

    abstract invite(email?: string): boolean | Promise<boolean>;

    abstract removeUser(userId?: string): boolean | Promise<boolean>;

    abstract makeAdmin(userId?: string): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract sets(): Set[] | Promise<Set[]>;

    abstract set(input: string): Set | Promise<Set>;

    abstract folders(): Folder[] | Promise<Folder[]>;

    abstract folder(folderId?: string): Folder | Promise<Folder>;

    abstract classes(): Class[] | Promise<Class[]>;

    abstract class(classId?: string): Class | Promise<Class>;
}

export class Card {
    id?: string;
    setId?: string;
    term?: string;
    orderNumber?: number;
    definition?: string;
    termLanguage?: Language;
    definitionLanguage?: Language;
}

export class Set {
    id: string;
    userId: string;
    title: string;
    description: string;
    visible: Visible;
    editable: Editable;
    password?: string;
    cards?: Card[];
    totalCards: number;
    createdAt: Date;
    updatedAt: Date;
}

export class User {
    id: string;
    name: string;
    email: string;
    role: string;
    birthday: Date;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
