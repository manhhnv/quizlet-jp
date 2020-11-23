import { getAccessToken } from "../../helper/getDataLocaStorage"
import { me } from "./userAction"


export const resolverReload = () => {
    return async (dispatch: any) => {
        const accessToken = await getAccessToken();
        dispatch(me(accessToken))
    }
}