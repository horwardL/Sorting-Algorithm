import { TOGGLE_STATE } from "../action/types";

export const toggleState = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_STATE:
      return !state;
    default:
      return state;
  }
};
