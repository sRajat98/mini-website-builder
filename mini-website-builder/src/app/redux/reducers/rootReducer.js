import { combineReducers } from "redux";
import searchBarReducer from "./sideBarReducer";

const rootReducer = combineReducers({ sideBar: searchBarReducer });

export default rootReducer;
