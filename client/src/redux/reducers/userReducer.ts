import { UPDATE_USER } from './../actions/userAction';

const initialUserState = {id: null, token: ''}

const userReducer = (state = initialUserState, action: any) => {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, token: action.payload}
        default:
            return state;
    }
}
export default userReducer;