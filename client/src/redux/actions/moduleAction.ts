import axios from 'axios';
import { MODULE_GET, MODULE_CREATE } from '../../services/module/module.service';

export const ALL_MODULES = "ALL_MODULES";
export const CREATE_MODULE = "CREATE_MODULE";

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

export const addModule = ( addToast: any, token: String) => {
    return (dispatch: any) => {
        axios.post(MODULE_CREATE.url, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(response => {
                if (response.data?.name) {
                    if (addToast) {
                        addToast("addModule success", {
                            appearance: "success",
                            autoDismiss: true
                        })
                    }
                    setTimeout(() => {
                        window.location.reload()
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