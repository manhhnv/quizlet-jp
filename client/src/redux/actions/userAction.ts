import { LOG_IN } from './../../graphql/user.grapql';
import { client } from "../../apollo-graphql";

export const UPDATE_USER = "UPDATE_USER";
export const userLogin = (email: string, password: string, addToast: any) => {
    return async (dispatch: any) => {
        try {
            const response = await client.mutate({
                mutation: LOG_IN,
                variables: {
                    email: email,
                    password: password
                }
            })
            if (response?.data?.login) {
                dispatch({
                    type: UPDATE_USER,
                    payload: response.data.login
                })
                if (addToast) {
                    addToast("Welcome to Quizlet JP", {
                        appearance: "success",
                        autoDismiss: true
                    })
                }
            }
        }
        catch(e) {
            if(addToast) {
                addToast(e.message || e, {
                    appearance: "error",
                    autoDismiss: true
                })
            }
        }
    }
}