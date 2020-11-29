import { ActionStore } from '../../types';
import { ALL_MODULES, CREATE_MODULE, DELETE_MODULE, EDIT_MODULE } from './../actions/moduleAction';

const initialModuleState = {list: [] as any, total: 0}

const termReducer = (state = initialModuleState, action: ActionStore) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default termReducer;