import { Api } from '../../types';

export const MODULE_GET: Api = {
    url: "http://localhost:9000/api/module/allModules",
    method: "GET"
}

export const MODULE_CREATE: Api = {
    url: "http://localhost:9000/api/module/create",
    method: "POST"
}

export const MODULE_DELETE: Api = {
    url: "http://localhost:9000/api/module/delete",
    method: "DELETE"
}

export const MODULE_UPDATE: Api = {
    url: "http://localhost:9000/api/module/update",
    method: "PUT"
}