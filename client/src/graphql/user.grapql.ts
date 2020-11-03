import { gql } from '@apollo/client';

export const LOG_IN = gql`
    mutation login($input: LoginInput!) {
        login(input: $input) {
            token
        }
    }
`;
export const REGISTER = gql`
    mutation register($input: RegisterInput!) {
        register(input: $input) {
            token
        }
    }
`;