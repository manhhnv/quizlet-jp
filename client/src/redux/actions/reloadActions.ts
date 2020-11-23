import { getAccessToken } from "../../helper/getDataLocaStorage"
import { me } from "./userAction"
import { allModules } from "./moduleAction";


export const resolverReload = () => {
    return async (dispatch: any) => {
        const accessToken = await getAccessToken();
        dispatch(me(accessToken))
        dispatch(allModules(accessToken))
    }
}