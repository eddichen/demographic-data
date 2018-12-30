import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";

// const defaultState = {
//   error: null,
//   isLoaded: false,
//   fields: [],
//   selectedField: "",
//   items: [],
//   resultDataCount: 0
// };

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
