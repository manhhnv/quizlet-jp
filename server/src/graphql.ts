
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewUser {
    name: string;
    email: string;
    birthday: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
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

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract login(input?: LoginInput): string | Promise<string>;
}

export abstract class IMutation {
    abstract register(input: NewUser): string | Promise<string>;

    abstract update(id: number, input: NewUser): string | Promise<string>;
}
