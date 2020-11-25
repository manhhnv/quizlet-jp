import { BASE_URL } from '../../constants';
import { Api, HTTP_METHOD } from '../../types';

export const LIST_CLASS: Api = {
  url: `${BASE_URL}/class/all`,
  method: HTTP_METHOD.GET
}

// export const CLASS_DETAIL: Api = {
//   url: `${BASE_URL}/class/all`,
//   method: HTTP_METHOD.GET
// }

export const CREATE_CLASS: Api = {
  url: `${BASE_URL}/class/create`,
  method: HTTP_METHOD.POST
}

export const UPDATE_CLASS_API: Api = {
  url: `${BASE_URL}/class/update`,
  method: HTTP_METHOD.PUT
}

export const DELETE_CLASS_API: Api = {
  url: `${BASE_URL}/class/delete`,
  method: HTTP_METHOD.DELETE
}

export const GET_MODULES_IN_CLASS: Api = {
  url: `${BASE_URL}/class/module`,
  method: HTTP_METHOD.GET
}

export const ASSIGN_MODULE_TO_ClASS: Api = {
  url: `${BASE_URL}/class/assign-module-to-class`,
  method: HTTP_METHOD.POST
}

export const DELETE_MODULE_FROM_CLASS: Api = {
  url: `${BASE_URL}/class/delete-module/module`,
  method: HTTP_METHOD.DELETE
}