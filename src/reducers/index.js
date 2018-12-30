import { combineReducers } from "redux";
import selectedField from "./selectedField";
import requestFields from "./requestFields";

const rootReducer = combineReducers({ requestFields });

export default rootReducer;
