import { LOG_IN, REGISTER } from './../../graphql/user.grapql';
import { client } from "../../apollo-graphql";
import  { Redirect } from 'react-router-dom'
export const UPDATE_USER = "UPDATE_USER";
export const userLogin = (credential: any, addToast: any) => {
    return async (dispatch: any) => {
        try {
            const response = await client.mutate({
                mutation: LOG_IN,
                variables: {
                    input: credential,
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
                window.location.replace("/overview")
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

export const userRegister = (credential: any, addToast: any) => {
    return async (dispatch: any) => {
        try {
            const response = await client.mutate({
                mutation: REGISTER,
                variables:{
                    input: credential
                }
            })
            if (response?.data?.register) {
                dispatch({
                    type: UPDATE_USER,
                    payload: response.data.register
                })
                if (addToast) {
                    addToast("Welcome to Quizlet JP", {
                        appearance: "success",
                        autoDismiss: true
                    })
                }
                window.location.replace("/overview")
            }
        }
        catch(e) {
            console.log(e)
            if(addToast) {
                addToast(e.message || e, {
                    appearance: "error",
                    autoDismiss: true
                })
            }
        }
    }
}