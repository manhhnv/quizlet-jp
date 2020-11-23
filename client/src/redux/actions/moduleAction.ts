import axios from 'axios';
import { MODULE_GET, MODULE_CREATE, MODULE_DELETE } from '../../services/module/module.service';
import { ModuleCreate } from '../../types';

export const ALL_MODULES = "ALL_MODULES";
export const CREATE_MODULE = "CREATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";

export const allModules = (token: String) => {
    return async (dispatch: any) => {
        await axios.get(MODULE_GET.url, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                dispatch({
                    type: ALL_MODULES,
                    payload: res.data,
                })
                // window.location.replace("/home");
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addModule = (token: String, addToast: any, data: object) => {
    return async (dispatch: any) => {
        axios.post(MODULE_CREATE.url, data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(response => {
                if (response.data?.name) {
                    if (addToast) {
                        dispatch({
                            type: CREATE_MODULE,
                            payload: response.data,
                        })
                        addToast("addModule success", {
                            appearance: "success",
                            autoDismiss: true
                        })
                    }
                    setTimeout(() => {
                        window.location.replace("/overview");
                    }, 1500)
                }
                else {
                    if (addToast) {
                        addToast("addModule failed !", {
                            appearance: "error",
                            autoDismiss: true
                        })
                    }
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                }
            })
            .catch(e => {
                if (addToast) {
                    addToast("addModule failed !", {
                        appearance: "error",
                        autoDismiss: true
                    })
                }
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
    }
}

export const deleteModule = (token: String, addToast: any, id: any) => {
    return async (dispatch: any) => {
        let config = {
            headers: {
                "Authorization": "Bearer " + token
            }
        };
        axios.delete(MODULE_DELETE.url + `/${id}`, config)
            .then(response => {
                if (response.data != null) {
                    if (addToast) {
                            dispatch({
                                type: DELETE_MODULE,
                                payload: response.data,
                            })
                            addToast("deleteModule success", {
                                appearance: "success",
                                autoDismiss: true
                            })
                            // setTimeout(() => {
                            //     window.location.reload()
                            // }, 1500)
                    }
    
                }
                else {
                    if (addToast) {
                        addToast("deleteModule failed !", {
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