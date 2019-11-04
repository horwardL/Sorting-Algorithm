import { ALGORITHM_SELECT } from "../action/types";

export const algoReducer = (state = "SELECTION_SORT", action) => {
  switch (action.type) {
    case ALGORITHM_SELECT:
      return action.algorithm;
    default:
      return state;
  }
};
