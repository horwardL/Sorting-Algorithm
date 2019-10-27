const algorithmState = "selectionSort";

export const algoReducer = (state = algorithmState, action) => {
  switch (action.type) {
    case "ALGORITHM_SELECT":
      return action.algorithm;
    default:
      return state;
  }
};
