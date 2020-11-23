import { Api } from '../../types';

export const USER_REGISTER: Api = {
    url: "http://localhost:9000/api/auth/signup",
    method: "POST"
}
export const USER_LOGIN: Api = {
    url: "http://localhost:9000/api/auth/login",
    method: "POST"
}

export const USER_LOGOUT: Api = {
    url: "http://localhost:9000/api/auth/logout",
    method: "GET"
}