import { ARRAY_CHANGE, SWAP_ARRAY } from "../action/types";

const initialState = {
  size: Math.floor(((window.screen.width - 222) / 3.33) * 0.5),
  array: []
};

export const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARRAY_CHANGE:
      return {
        ...state,
        size: action.payload.size,
        array: action.payload.array
      };
    case SWAP_ARRAY:
      return {
        ...state,
        array: action.array
      };
    default:
      return state;
  }
};
