import { combineReducers } from "redux";
import fetchSelectFields from "./fetchSelectFields";
import selectedField from "./selectedField";
import fetchFieldData from "./fetchFieldData";

const rootReducer = combineReducers({
  fetchSelectFields,
  selectedField,
  fetchFieldData
});

export default rootReducer;
