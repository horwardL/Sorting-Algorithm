import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

function selectionSort() {
  return async (dispatch, getState) => {
    const array = getState().array.array;
    const size = getState().array.size;
    let min = 0,
      temp = 0;
    for (let i = 0; i < size; ++i) {
      min = i;
      document.getElementById(`array-bar-${min}`).style.backgroundColor =
        "green";
      for (let j = i + 1; j < size; ++j) {
        document.getElementById(`array-bar-${j}`).style.backgroundColor = "red";
        await sleep(getState().speed);
        document.getElementById(`array-bar-${j}`).style.backgroundColor =
          "white";
        if (array[j] < array[min]) {
          document.getElementById(`array-bar-${min}`).style.backgroundColor =
            "white";
          min = j;
          document.getElementById(`array-bar-${min}`).style.backgroundColor =
            "green";
        }
        if (!getState().curState) {
          break;
        }
      }
      document.getElementById(`array-bar-${min}`).style.backgroundColor =
        "white";
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      await dispatch({
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

export default selectionSort;
