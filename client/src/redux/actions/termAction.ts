import axios from 'axios';
import {TERM_CREATE, TERM_DELETE, TERM_GET_ALL, TERM_UPDATE} from '../../services/term/term.service';

export const ALL_TERMS = "ALL_TERMS";
export const CREATE_TERM = "CREATE_TERM";
export const DELETE_TERM = "DELETE_TERM";
export const EDIT_TERM = "EDIT_TERM";

export const allTermsByTerm = (token: String, moduleId: any) => {
    return async (dispatch: any) => {
        await axios.get(TERM_GET_ALL.url + `/${moduleId}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                dispatch({
                    type: ALL_TERMS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const showOneTerm = (token: String, id: any) => {
    return async (dispatch: any) => {
        await axios.get(TERM_GET_ALL.url + `${id}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                dispatch({
                    type: ALL_TERMS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addTerm = (token: String, addToast: any, data: object) => {
    return async (dispatch: any) => {
        axios.post(TERM_CREATE.url, data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(response => {
                if (response.data?.id) {
                    if (addToast) {
                        dispatch({
                            type: CREATE_TERM,
                            payload: response.data,
                        })
                        addToast("addTerm success", {
                            appearance: "success",
                            autoDismiss: true
                        })
                    }
                } else {
                    if (addToast) {
                        addToast("addTerm failed !", {
                            appearance: "error",
                            autoDismiss: true
                        })
                    }
                }
            })
            .catch(e => {
                if (addToast) {
                    addToast("send addTerm failed !", {
                        appearance: "error",
                        autoDismiss: true
                    })
                }
            })
    }
}

export const deleteTerm = (token: String, addToast: any, moduleId: any, id: any) => {
    return async (dispatch: any) => {
        let config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };
        axios.delete(TERM_DELETE.url + `/${moduleId}/${id}`, config)
            .then(response => {
                if (response.data != null) {
                    if (addToast) {
                        dispatch({
                            type: DELETE_TERM,
                            payload: response.data,
                        })
                        addToast("deleteTerm success", {
                            appearance: "success",
                            autoDismiss: true
                        })
                    }

                } else {
                    if (addToast) {
                        addToast("deleteTerm failed !", {
                            appearance: "error",
                            autoDismiss: true
                        })
                    }
                }
            })
            .catch(e => {
                if (addToast) {
                    addToast("erro when send delete !", {
                        appearance: "error",
                        autoDismiss: true
                    })
                }
            })
    }
}

export const editTerm = (token: String, addToast: any, moduleId: any, id: any, data: object) => {
    console.log(token);

    console.log(TERM_UPDATE.url + `/${moduleId}/${id}?name=${Object(data)["name"]}&public=${Object(data)["publicc"]}`);
    return async (dispatch: any) => {
        let config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };
        axios.put(TERM_UPDATE.url + `/${moduleId}/${id}?name=${Object(data)["name"]}&public=${Object(data)["publicc"]}`, null, config)
            .then(response => {
                if (response.data != null) {
                    if (addToast) {
                        dispatch({
                            type: EDIT_TERM,
                            payload: response.data,
                        })
                        addToast("edit Term success", {
                            appearance: "success",
                            autoDismiss: true
                        })
                    }

                } else {
                    if (addToast) {
                        addToast("updateTerm failed !", {
                            appearance: "error",
                            autoDismiss: true
                        })
                    }
                }
            })
            .catch(e => {
                if (addToast) {
                    addToast("erro when send update !", {
                        appearance: "error",
                        autoDismiss: true
                    })
                }
            })
    }
}
