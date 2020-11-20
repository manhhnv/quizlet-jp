import { UPDATE_USER, UPDATE_USER_TOKEN } from './../actions/userAction';

const initialUserState = {token: '', user: null}

const userReducer = (state = initialUserState, action: any) => {
    switch(action.type) {
        case UPDATE_USER_TOKEN:
            return {...state, token: action.payload.access_token, user: action.payload.user}
        case UPDATE_USER:
            return {...state, user: action.payload.user}
        default:
            return state;
    }
}
export default userReducer;