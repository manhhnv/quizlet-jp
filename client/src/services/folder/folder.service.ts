import { BASE_URL } from '../../constants';
import { Api, HTTP_METHOD } from '../../types';

export const LIST_FOLDERS: Api = {
    url: `${BASE_URL}/folder/listFolder`,
    method: HTTP_METHOD.GET
}

export const FOLDER_DETAIL: Api = {
    url: `${BASE_URL}/folder/detail`,
    method: HTTP_METHOD.GET
}

export const CREATE_FOLDER: Api = {
    url: `${BASE_URL}/folder/create`,
    method: HTTP_METHOD.POST
}

export const UPDATE_FOLDER: Api = {
    url: `${BASE_URL}/folder/update`,
    method: HTTP_METHOD.PUT
}

export const DELETE_FOLDER: Api ={
    url: `${BASE_URL}/folder/delete`,
    method: HTTP_METHOD.DELETE
}