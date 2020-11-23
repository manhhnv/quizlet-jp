import { combineReducers } from "redux";
import demoReducer from "./demoReducer";
import userReducer from "./userReducer";
import moduleReducer from "./moduleReducer";

const rootReducer = combineReducers({
    demo: demoReducer,
    user: userReducer,
    module: moduleReducer,
})
export default rootReducer;