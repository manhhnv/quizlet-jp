
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

export class SetInput {
    title: string;
    description: string;
    visible: Visible;
    editable: Editable;
    password: string;
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

    abstract createSet(input: SetInput): Set | Promise<Set>;

    abstract updateSet(input?: SetInput): Set | Promise<Set>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract sets(): Set[] | Promise<Set[]>;

    abstract set(input: string): Set | Promise<Set>;
}

export class Card {
    id?: string;
    setId?: string;
    userId?: string;
    term?: string;
    definition?: string;
    termLanguage?: Language;
    definitionLanguage?: Language;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Set {
    id: string;
    userId: string;
    title: string;
    description: string;
    visible: Visible;
    editable: Editable;
    password: string;
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
