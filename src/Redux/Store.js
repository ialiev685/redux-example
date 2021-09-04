import { createStore, combineReducers } from "redux";
import { valueReducer } from "./Counter/counter-reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  counter: valueReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
