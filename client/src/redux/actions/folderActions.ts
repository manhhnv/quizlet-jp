import Axios from 'axios';
import { CreateFolderInput, UpdateFolderInput } from '../../types';
import { LIST_FOLDERS, CREATE_FOLDER, DELETE_FOLDER } from '../../services/folder/folder.service';

export const ADD_FOLDER = "ADD_FOLDER";
export const UPDATE_FOLDER = "UPDATE_FOLDER";

export const getListFolders = (token: string) => {
    return async (dispatch: any) => {
        Axios.get(LIST_FOLDERS.url, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {
            dispatch({
                type: UPDATE_FOLDER,
                payload: res.data
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
}
export const createFolder = (token: string, input: CreateFolderInput, addToast: any) => {
    return async (dispatch: any) => {
        Axios.post(CREATE_FOLDER.url, input, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => {
            if (res.data) {
                dispatch({
                    type: ADD_FOLDER,
                    payload: res.data
                })
            }
            if (addToast) {
                addToast("Create folder success", {
                    appearance: "success",
                    autoDismiss: true
                })
            }
        })
        .catch(e => {
            console.log(e)
            if (addToast) {
                addToast("Create folder failed", {
                    appearance: "error",
                    autoDismiss: true
                })
            }
        })
    }
}

export const deleteFolder = (token: string, folder_id: number, addToast: any) => {
    return async(dispatch: any) => {
        Axios.delete(DELETE_FOLDER.url + `/${folder_id}`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch({
                type: UPDATE_FOLDER,
                payload: res.data
            })
            if (addToast) {
                addToast("Deleted folder success", {
                    appearance: "success",
                    autoDismiss: true
                })
            }
        })
        .catch(e => {
            addToast("Delete folder failed", {
                appearance: "success",
                autoDismiss: true
            })
        })
    }
}