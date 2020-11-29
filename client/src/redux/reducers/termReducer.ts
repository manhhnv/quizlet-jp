import { ActionStore } from '../../types';
import { ALL_TERMS, CREATE_TERM, DELETE_TERM, EDIT_TERM } from './../actions/termAction';

const initialModuleState = {list: [] as any, total: 0}

const termReducer = (state = initialModuleState, action: ActionStore) => {
    switch(action.type) {
        case ALL_TERMS:
            return {...state, ...{list:  action.payload}, total: action.payload.length};
        case CREATE_TERM:
            const totalClone = state.total + 1
            return {...state, list: [...state.list, action.payload], total: totalClone};
        case DELETE_TERM:
            return {...state, list: action.payload};
        case EDIT_TERM:
            console.log(action.payload) ;
            const listClone = state.list;
            listClone.map((module: any, index: number) => {
                if (module.id === action.payload.id) {
                    listClone[index] = action.payload
                }
            })
            return {...state, list: listClone};
        default:
            return state;
    }
}
export default termReducer;
