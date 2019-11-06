import { MODE_CHANGE } from "../action/types";

export const modeState = (state = true, action) => {
  switch (action.type) {
    case MODE_CHANGE:
      return action.mode;
    default:
      return state;
  }
};
