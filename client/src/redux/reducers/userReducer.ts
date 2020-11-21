import { initial } from 'lodash';
import { UPDATE_USER, UPDATE_USER_TOKEN, LOGOUT_USER } from './../actions/userAction';

const initialUserState = {token: '', user: null}

const userReducer = (state = initialUserState, action: any) => {
    switch(action.type) {
        case UPDATE_USER_TOKEN:
            console.log(action.payload)
            return {...state, token: action.payload.access_token, user: action.payload.user}
        case UPDATE_USER:
            return {...state, user: action.payload.user}
        case LOGOUT_USER: 
            return initialUserState;
        default:
            return state;
    }
}
export default userReducer;