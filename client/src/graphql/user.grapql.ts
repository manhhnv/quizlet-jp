import { gql } from '@apollo/client';

export const LOG_IN = gql`
    mutation login($input: LoginInput) {
        login(input: $input) {
            token
        }
    }
`;