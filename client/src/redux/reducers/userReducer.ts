import { UPDATE_USER } from './../actions/userAction';

const initialUserState = {id: null, firstName: '', lastName: '', email: ''}

const userReducer = (state = initialUserState, action: any) => {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export default userReducer;