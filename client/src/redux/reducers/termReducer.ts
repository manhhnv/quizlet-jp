import { ActionStore } from '../../types';
import { ALL_TERMS, CREATE_TERM } from './../actions/termActions';

const initialModuleState = { list: [] as any, total: 0 }

const termReducer = (state = initialModuleState, action: ActionStore) => {
    switch (action.type) {
        case ALL_TERMS:
            return { ...state, ...{ list: action.payload }, total: action.payload.length }; 
        case CREATE_TERM:
            const totalClone = state.total + 1
            return { ...state, list: [...state.list, action.payload], total: totalClone };
        default:
            return state;
    }
}
export default termReducer;