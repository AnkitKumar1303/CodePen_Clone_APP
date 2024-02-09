import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import projectReducer from "./projectReducers";

const myReducer= combineReducers({
    user:userAuthReducer,
    projects:projectReducer,
})

export default myReducer;