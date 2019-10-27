import { combineReducers } from "redux";
import { arrayReducer } from "./array/index";
import { algoReducer } from "./algorithm/index";

export const rootReducer = combineReducers({
  array: arrayReducer,
  algorithm: algoReducer
});
