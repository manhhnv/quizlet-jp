import { gql } from '@apollo/client';

export const GET_RATES = gql`
    query GetRates($currency: String!) {
        rates(currency: $currency) {
            currency
            rate
            name
        }
    }
`