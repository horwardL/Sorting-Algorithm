import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

export default function bubbleSort() {
  return async (dispatch, getState) => {
    const array = [...getState().array.array];
    const size = getState().array.size;
    let temp = 0;

    for (let i = 0; i < size - 1; ++i) {
      for (let j = 0; j < size - i - 1; ++j) {
        if (array[j] > array[j + 1]) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
        document.getElementById(`array-bar-${j}`).style.backgroundColor = "red";
        document.getElementById(`array-bar-${j + 1}`).style.backgroundColor =
          "red";
        await sleep(getState().speed);
        document.getElementById(`array-bar-${j}`).style.backgroundColor =
          "white";
        document.getElementById(`array-bar-${j + 1}`).style.backgroundColor =
          "white";
        dispatch({
          type: SWAP_ARRAY,
          array: [...array]
        });
        if (!getState().curState) {
          break;
        }
      }
      if (!getState().curState) {
        break;
      }
    }
    if (getState().curState) {
      dispatch({ type: TOGGLE_STATE });
    }
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
