import { BASE_URL } from '../../constants';
import { Api } from '../../types';

export const USER_REGISTER: Api = {
    url: `${BASE_URL}/auth/signup`,
    method: "POST"
}
export const USER_LOGIN: Api = {
    url: `${BASE_URL}/auth/login`,
    method: "POST"
}
export const QUERY_ME: Api = {
    url: `${BASE_URL}/auth/user`,
}
export const USER_LOGOUT: Api = {
    url: `${BASE_URL}/auth/logout`,
    method: "GET"
}