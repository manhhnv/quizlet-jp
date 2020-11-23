import { ActionStore } from "../../types";
import { ADD_FOLDER, UPDATE_FOLDER } from '../actions/folderActions';

const initialFolderState = {list: [], totalFolders: 0}

const folderReducer = (state = initialFolderState, action: ActionStore) => {
    switch(action.type) {
        case ADD_FOLDER:
            const total = state.totalFolders + 1;
            return {...state, ...{list: action.payload}, totalFolders: total};
        case UPDATE_FOLDER:
            return {...state, ...{list: action.payload}, totalFolders: action.payload.length};
        default:
            return state;
    }
}
export default folderReducer;