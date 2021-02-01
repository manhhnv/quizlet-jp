import axios from "axios";
import { TERM_GET } from "../../services/term/term.service";
import {TEST_CHECK, TEST_GET} from "../../services/test/test.service";

export const ALL_TEST = "ALL_TEST";
export const CHECK_TEST = "CHECK_TEST";

export const getQuestionInModule = async (token: string, module_id: number, setLoading?: any) => {
    const response = await axios.get(`${TEST_GET.url}/${module_id}/testing`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        if (res.data !== null) {
            if (setLoading) {
                setLoading(false)
            }
            return res.data
        }
    })
    .catch(e => {
        console.log(e)
        if (setLoading) {
            setLoading(false)
        }
    })
    console.log("REAAAA", response);
    return response;
}

export const allTest = (token: String, moduleId: any, setLoading?: any) => {
    return async (dispatch: any) => {
        await axios.get(TEST_GET.url + `/${moduleId}/testing`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                if (res.data !== null) {
                    dispatch({
                        type: ALL_TEST,
                        payload: res.data,
                    })
                }
                if (setLoading) {
                    setLoading(false);
                }
                console.log("Fetching...");
                return res.data
            })
            .catch(err => {
                console.log(err)
                if (setLoading) {
                    setLoading(false);
                }
            })
    }
}

export const checkResult = (token: String, addToast: any, data: object, setPopup?: any) => {
    return async (dispatch: any) => {
        axios.post(TEST_CHECK.url, data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(response => {
                if (typeof response.data === "number") {
                    if (addToast) {
                        dispatch({
                            type: CHECK_TEST,
                            payload: response.data,
                        })
                        addToast("check Test success", {
                            appearance: "success",
                            autoDismiss: true
                        })
                        if (setPopup) {
                            setPopup(true);
                        }
                    }
                    // setTimeout(() => {
                    //     window.location.replace("/overview");
                    // }, 1000)
                } else {
                    if (addToast) {
                        addToast("check Test failed !", {
                            appearance: "error",
                            autoDismiss: true
                        })
                    }
                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 1500)
                }
            })
            .catch(e => {
                if (addToast) {
                    addToast("send check Test failed !", {
                        appearance: "error",
                        autoDismiss: true
                    })
                }
                // setTimeout(() => {
                //     window.location.reload()
                // }, 1500)
            })
    }
}

