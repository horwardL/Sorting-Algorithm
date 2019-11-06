import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

export default function insertionSort() {
  return async (dispatch, getState) => {
    const array = [...getState().array.array];
    const size = getState().array.size;
    const shape = getState().shape;
    let temp = 0,
      j = 0;

    for (let i = 1; i < size; ++i) {
      j = i;

      while (j > 0 && array[j] < array[j - 1]) {
        if (getState().mode) {
          document.getElementById(`array-${shape}-${j}`).style.backgroundColor =
            "red";
          await sleep(getState().speed);
          document.getElementById(`array-${shape}-${j}`).style.backgroundColor =
            "white";
        }
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        --j;
        dispatch({
          type: SWAP_ARRAY,
          array: [...array]
        });
        if (getState().mode) {
          await sleep(getState().speed);
        }
        if (!getState().curState) {
          break;
        }
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
    if (getState().curState) {
      dispatch({ type: TOGGLE_STATE });
    }
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
