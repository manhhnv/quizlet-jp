import { combineReducers } from "redux";
import demoReducer from "./demoReducer";
import userReducer from "./userReducer";
import moduleReducer from "./moduleReducer";
import folderReducer from "./folderReducer";
import classReducer from "./classReducer";
import termReducer from "./termReducer";

const rootReducer = combineReducers({
    demo: demoReducer,
    user: userReducer,
    module: moduleReducer,
    folders: folderReducer,
    classes: classReducer,
    term: termReducer
})
export default rootReducer;
