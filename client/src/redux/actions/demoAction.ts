export const GET_BY_CURRENCY = "GET_BY_CURRENCY"

import { GET_RATES } from './../../graphql/demo-graphql';
import { client } from './../../apollo-graphql';

export const getRatedByCurrency = (currency: string) => {
    return async (dispatch: any) => {
        try {
            const getRates = await client.query({
                query: GET_RATES,
                fetchPolicy: 'network-only'
            });
            const rates = getRates?.data?.rates ? getRates.data.rates : null;
            if (rates != null) {
                dispatch({
                    type: GET_BY_CURRENCY,
                    payload: rates
                })
            }
            else {
                console.log("Check your networking...")
            }
        } catch (error) {
            console.log(error)
        }
    }
}