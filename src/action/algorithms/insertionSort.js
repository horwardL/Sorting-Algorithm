import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

export default function insertionSort() {
  return async (dispatch, getState) => {
    const array = [...getState().array.array];
    const size = getState().array.size;
    let temp = 0,
      j = 0;

    for (let i = 1; i < size; ++i) {
      j = i - 1;
      temp = array[i];

      while (j >= 0 && array[j] > temp) {
        if (getState().shape === "bar") {
          document.getElementById(`array-bar-${j}`).style.backgroundColor =
            "red";
          await sleep(getState().speed);
          document.getElementById(`array-bar-${j}`).style.backgroundColor =
            "white";
        } else {
          document.getElementById(`array-bar-${j}`).style.backgroundColor =
            "red";
          await sleep(getState().speed);
          document.getElementById(`array-bar-${j}`).style.backgroundColor =
            "white";
          array[j + 1] = array[j];
        }
        --j;
        dispatch({
          type: SWAP_ARRAY,
          array: [...array]
        });
        if (!getState().curState) {
          break;
        }
      }
      array[j + 1] = temp;
      dispatch({
        type: SWAP_ARRAY,
        array: [...array]
      });
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
