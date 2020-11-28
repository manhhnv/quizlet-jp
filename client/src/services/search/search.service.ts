import { BASE_URL } from "../../constants";
import { Api, HTTP_METHOD } from "../../types";

export const SEARCH_MODULE: Api = {
    url: `${BASE_URL}/search/module`,
    method: HTTP_METHOD.GET
}