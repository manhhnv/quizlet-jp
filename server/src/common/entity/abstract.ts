// import { ID } from '@nestjs/graphql';
// import { DeepPartial, } from "typeorm";
export declare type DeepPartial<T> = {
    [P in keyof T]?: null | (T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>);
};
export declare abstract class QuizletEntity {
    protected constructor(input?: DeepPartial<QuizletEntity>);
    createdAt: Date;
    updatedAt: Date;
}