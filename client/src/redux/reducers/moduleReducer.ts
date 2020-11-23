import { ALL_MODULES, CREATE_MODULE, DELETE_MODULE } from './../actions/moduleAction';

const initialModuleState = {list: []}

const moduleReducer = (state = initialModuleState, action: any) => {
    switch(action.type) {
        case ALL_MODULES:
            const listModules = action.payload;
            console.log(listModules);
            return listModules;
        case CREATE_MODULE:
            console.log(action.payload) 
            return state;
        case DELETE_MODULE:
            console.log(action.payload) 
            return state;
        default:
            return state;
    }
}
export default moduleReducer;