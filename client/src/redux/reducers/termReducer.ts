import { ActionStore } from '../../types';
import { ALL_TERMS} from './../actions/termActions';

const initialModuleState = {list: [] as any, total: 0}

const termReducer = (state = initialModuleState, action: ActionStore) => {
    switch(action.type) {
        case ALL_TERMS:
            return {...state, ...{list:  action.payload}, total: action.payload.length};
        default:
            return state;
    }
}
export default termReducer;