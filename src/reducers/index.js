import { combineReducers } from "redux";

import { arrayReducer } from "./array";
import { algoReducer } from "./algorithm";
import { speedReducer } from "./speed";
import { toggleState } from "./currenState";
import { shapeState } from "./shape";
import { modeState } from "./mode";

const rootReducer = combineReducers({
  array: arrayReducer,
  speed: speedReducer,
  algorithm: algoReducer,
  curState: toggleState,
  shape: shapeState,
  mode: modeState
});

export default rootReducer;
