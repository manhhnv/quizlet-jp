import { gql } from '@apollo/client';

export const LOG_IN = gql`
    query login($input: LoginInput) {
        login(input: $input)
    }
`;