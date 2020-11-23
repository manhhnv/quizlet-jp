import { Api } from '../../types';
import { BASE_URL } from '../../constants';
export const MODULE_GET: Api = {
    url: `${BASE_URL}/api/module/allModules`,
    method: "GET"
}

export const MODULE_CREATE: Api = {
    url: `${BASE_URL}/api/module/create`,
    method: "POST"
}

export const MODULE_DELETE: Api = {
    url: `${BASE_URL}/api/module/delete`,
    method: "DELETE"
}

export const MODULE_UPDATE: Api = {
    url: `${BASE_URL}/api/module/update`,
    method: "PUT"
}