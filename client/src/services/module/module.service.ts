import { Api } from '../../types';

export const MODULE_GET: Api = {
    url: "http://localhost:9000/api/module/allModules",
    method: "GET"
}

export const MODULE_CREATE: Api = {
    url: "http://localhost:9000/api/module/create",
    method: "POST"
}