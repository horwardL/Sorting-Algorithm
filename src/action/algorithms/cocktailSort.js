import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

export default function cocktailSort() {
  return async (dispatch, getState) => {
    const array = [...getState().array.array];
    const size = getState().array.size;
    const shape = getState().shape;
    let swapped = true;
    let temp = 0,
      left = 0,
      right = size - 1;

    while (swapped) {
      swapped = false;
      for (let i = left; i < right; ++i) {
        if (array[i] > array[i + 1]) {
          temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
        if (getState().mode) {
          document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
            "red";
          document.getElementById(
            `array-${shape}-${i + 1}`
          ).style.backgroundColor = "red";
          await sleep(getState().speed);
          document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
            "white";
          document.getElementById(
            `array-${shape}-${i + 1}`
          ).style.backgroundColor = "white";
        }
        dispatch({
          type: SWAP_ARRAY,
          array: [...array]
        });
        if (!getState().mode) {
          await sleep(getState().speed);
        }
        if (!getState().curState) {
          break;
        }
      }
      --right;
      if (!swapped) {
        break;
      }
      swapped = true;
      for (let j = right; j > left; --j) {
        if (array[j] < array[j - 1]) {
          temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
          swapped = true;
        }
        if (getState().mode) {
          document.getElementById(`array-${shape}-${j}`).style.backgroundColor =
            "red";
          document.getElementById(
            `array-${shape}-${j - 1}`
          ).style.backgroundColor = "red";
          await sleep(getState().speed);
          document.getElementById(`array-${shape}-${j}`).style.backgroundColor =
            "white";
          document.getElementById(
            `array-${shape}-${j - 1}`
          ).style.backgroundColor = "white";
        }
        dispatch({
          type: SWAP_ARRAY,
          array: [...array]
        });
        if (!getState().mode) {
          await sleep(getState().sleep);
        }
        if (!getState().curState) {
          break;
        }
      }
      ++left;
    }
    if (getState().curState) {
      dispatch({ type: TOGGLE_STATE });
    }
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
