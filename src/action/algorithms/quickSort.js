import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

let dispatch, getState, shape;

function quickSort() {
  return async (disp, getSt) => {
    dispatch = disp;
    getState = getSt;
    shape = getState().shape;
    let array = [...getState().array.array];
    let size = getState().array.size;
    await sort(array, 0, size - 1);
    if (getState().curState) {
      dispatch({ type: TOGGLE_STATE });
    }
  };
}

async function sort(array, low, high) {
  if (low < high) {
    let pivot = await partition(array, low, high);
    if (!getState().curState) {
      return;
    }
    await sort(array, low, pivot);
    if (!getState().curState) {
      return;
    }
    await sort(array, pivot + 1, high);
    if (!getState().curState) {
      return;
    }
  }
}

async function partition(array, low, high) {
  let pivot = array[Math.floor((low + high) / 2)],
    temp = 0,
    l = low - 1,
    h = high + 1;

  while (true) {
    do {
      ++l;
      if (getState().mode) {
        document.getElementById(`array-${shape}-${l}`).style.backgroundColor =
          "red";
        await sleep(getState().speed);
        document.getElementById(`array-${shape}-${l}`).style.backgroundColor =
          "white";
      }
      if (!getState().curState) {
        break;
      }
    } while (array[l] < pivot);
    do {
      --h;
      if (getState().mode) {
        document.getElementById(`array-${shape}-${h}`).style.backgroundColor =
          "red";
        await sleep(getState().speed);
        document.getElementById(`array-${shape}-${h}`).style.backgroundColor =
          "white";
      }
      if (!getState().curState) {
        break;
      }
    } while (array[h] > pivot);
    if (l >= h) {
      break;
    }
    temp = array[l];
    array[l] = array[h];
    array[h] = temp;
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
  return h;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default quickSort;
