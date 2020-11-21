import { ALL_MODULES } from './../actions/moduleAction';

const initialModuleState = {list: []}

const moduleReducer = (state = initialModuleState, action: any) => {
    switch(action.type) {
        case ALL_MODULES:
            const listModules = action.payload;
            console.log(listModules);
            return listModules;
        default:
            return state;
    }
}
export default moduleReducer;