import { SHAPE_CHANGE } from "../action/types";

export const shapeState = (state = "bar", action) => {
  switch (action.type) {
    case SHAPE_CHANGE:
      return action.shape;
    default:
      return state;
  }
};
