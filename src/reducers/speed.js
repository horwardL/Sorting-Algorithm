import { SPEED_CHENGE } from "../action/types";

export const speedReducer = (state = 50, action) => {
  switch (action.type) {
    case SPEED_CHENGE:
      return action.speed;
    default:
      return state;
  }
};
