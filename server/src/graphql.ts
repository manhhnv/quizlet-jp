
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginInput {
    email: string;
    password: string;
}

export class RegisterInput {
    name: string;
    email: string;
    birthday: string;
    password: string;
}

export class SetUpdate {
    name?: string;
    description?: string;
    password?: string;
    viewAble?: number;
}

export class NewSet {
    name: string;
    description?: string;
    password?: string;
    viewAble?: boolean;
}

export class UserData {
    name?: string;
    email?: string;
    birthday?: string;
    password?: string;
}

export abstract class IMutation {
    abstract register(input: RegisterInput): UserToken | Promise<UserToken>;

    abstract login(input?: LoginInput): UserToken | Promise<UserToken>;

    abstract createSet(input: NewSet): Set | Promise<Set>;

    abstract updateSet(input?: SetUpdate): Set | Promise<Set>;

    abstract update(input?: UserData): User | Promise<User>;
}

export class UserToken {
    token: string;
    user: User;
}

export class Set {
    id: number;
    userId: number;
    name: string;
    description?: string;
    password?: string;
    viewAble?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export abstract class IQuery {
    abstract sets(): Set[] | Promise<Set[]>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;

    abstract me(): User | Promise<User>;
}

export class User {
    id: number;
    name: string;
    email: string;
    role: string;
    birthday: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}
