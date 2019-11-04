import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

function binaryInsertionSort() {
  return async (dispatch, getState) => {
    const array = getState().array.array;
    const size = getState().array.size;
    let temp = 0,
      left = 0,
      right = 0,
      mid = 0;

    for (let i = 1; i < size; ++i) {
      left = 0;
      right = i;

      while (left < right) {
        mid = Math.floor((left + right) / 2);
        document.getElementById(`array-bar-${mid}`).style.backgroundColor =
          "red";
        await sleep(getState().speed);
        document.getElementById(`array-bar-${mid}`).style.backgroundColor =
          "white";
        if (array[i] <= array[mid]) {
          right = mid;
        } else {
          left = mid + 1;
        }
        if (!getState().curState) {
          break;
        }
      }

      for (left; left < i; ++left) {
        temp = array[left];
        array[left] = array[i];
        array[i] = temp;
        document.getElementById(`array-bar-${left}`).style.backgroundColor =
          "green";
        await sleep(getState().speed);
        document.getElementById(`array-bar-${left}`).style.backgroundColor =
          "white";
        if (!getState().curState) {
          break;
        }
      }
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

export default binaryInsertionSort;
