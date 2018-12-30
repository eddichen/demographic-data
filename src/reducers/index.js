import { combineReducers } from "redux";
import fetchSelectFields from "./fetchSelectFields";
import selectedField from "./selectedField";

const rootReducer = combineReducers({ fetchSelectFields, selectedField });

export default rootReducer;
