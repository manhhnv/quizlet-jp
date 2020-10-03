import { Field, ArgsType } from '@nestjs/graphql';
export type ItemType = {
    name: string
}
export type Item = {
    id: string | number,
    name: string,
    createdAt: Date,
    updatedAt: Date
}