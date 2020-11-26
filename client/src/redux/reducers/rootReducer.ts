import { combineReducers } from "redux";
import demoReducer from "./demoReducer";
import userReducer from "./userReducer";
import moduleReducer from "./moduleReducer";
import folderReducer from "./folderReducer";
import classReducer from "./classReducer";

const rootReducer = combineReducers({
    demo: demoReducer,
    user: userReducer,
    module: moduleReducer,
    folders: folderReducer,
    classes: classReducer
})
export default rootReducer;