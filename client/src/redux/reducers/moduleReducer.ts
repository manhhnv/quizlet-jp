import { ALL_MODULES, CREATE_MODULE, DELETE_MODULE, EDIT_MODULE } from './../actions/moduleAction';

const initialModuleState = {list: []}

const moduleReducer = (state = initialModuleState, action: any) => {
    switch(action.type) {
        case ALL_MODULES:
            return {...state, ...{list:  action.payload}};
        case CREATE_MODULE:
            return {...state, ...{list: action.payload}};
        case DELETE_MODULE:
            return {...state, list: action.payload};
        case EDIT_MODULE: 
        console.log(action.payload) ;
        return {...state, ...{list: action.payload}};
        default:
            return state;
    }
}
export default moduleReducer;