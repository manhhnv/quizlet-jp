import axios from 'axios';
import { TERM_GET } from '../../services/term/term.service';

export const ALL_TERMS = "ALL_TERMS";

export const allTerms = (token: String, id: any, setLoading?: any) => {
    return async (dispatch: any) => {
        await axios.get(TERM_GET.url + `/${id}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                dispatch({
                    type: ALL_TERMS,
                    payload: res.data,
                })
                if (setLoading) {
                    setLoading(false);
                }
                console.log("Fetching...");
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }
}