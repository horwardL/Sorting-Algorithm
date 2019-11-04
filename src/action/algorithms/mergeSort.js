import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

let dispatch, getState, shape;

function mergeSort() {
  //toDispatch = [];
  return async (disp, getSt) => {
    dispatch = disp;
    getState = getSt;
    shape = getState().shape;
    const array = [...getState().array.array];
    const size = getState().array.size;
    await mergeSortRecur(array, 0, size - 1);
    if (getState().curState) {
      dispatch({ type: TOGGLE_STATE });
    }
    //handleDispatch(dispatch);
  };
}

async function mergeSortRecur(array, l, r) {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    await mergeSortRecur(array, l, m);
    if (!getState().curState) {
      return;
    }
    await mergeSortRecur(array, m + 1, r);
    if (!getState().curState) {
      return;
    }
    await merge(array, l, m, r);
    if (!getState().curState) {
      return;
    }
  }
}

async function merge(array, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n2; ++i) {
    L[i] = array[l + i];
    R[i] = array[m + 1 + i];
    document.getElementById(`array-${shape}-${l + i}`).style.backgroundColor =
      "red";
    document.getElementById(
      `array-${shape}-${m + 1 + i}`
    ).style.backgroundColor = "red";
    await sleep(getState().speed);
    document.getElementById(`array-${shape}-${l + i}`).style.backgroundColor =
      "white";
    document.getElementById(
      `array-${shape}-${m + 1 + i}`
    ).style.backgroundColor = "white";
    if (!getState().curState) {
      break;
    }
  }

  if (n1 !== n2) {
    L[n1 - 1] = array[l + n1 - 1];
  }

  let i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i++];
    } else {
      array[k] = R[j++];
    }
    document.getElementById(`array-${shape}-${k}`).style.backgroundColor =
      "red";
    await sleep(getState().speed);
    document.getElementById(`array-${shape}-${k}`).style.backgroundColor =
      "white";
    ++k;
    dispatch({
      type: SWAP_ARRAY,
      array: [...array]
    });
    if (!getState().curState) {
      break;
    }
  }

  while (i < n1) {
    array[k] = L[i++];
    k++;
    dispatch({
      type: SWAP_ARRAY,
      array: [...array]
    });
    await sleep(getState().speed);
    if (!getState().curState) {
      break;
    }
  }

  while (j < n2) {
    array[k] = R[j++];
    k++;
    dispatch({
      type: SWAP_ARRAY,
      array: [...array]
    });
    await sleep(getState().speed);
    if (!getState().curState) {
      break;
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default mergeSort;
