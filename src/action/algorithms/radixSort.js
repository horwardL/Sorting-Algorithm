import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

export default function radixSort() {
  return async (dispatch, getState) => {
    const array = [...getState().array.array];
    const size = getState().array.size;
    const shape = getState().shape;
    let count = [];
    let mx = array[0];
    let c = 0;

    for (let i = 0; i < size; ++i) {
      if (array[i] > mx) {
        mx = array[i];
      }
    }

    for (let m = 1; Math.floor(mx / m) > 0; m *= 10) {
      count = [[], [], [], [], [], [], [], [], [], []];

      for (let i = 0; i < size; i++) {
        count[Math.floor(array[i] / m) % 10].push(array[i]);
        if (getState().mode) {
          document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
            "red";
          await sleep(getState().speed);
          document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
            "white";
        }
        if (!getState().curState) {
          break;
        }
      }

      c = 0;
      for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < count[i].length; ++j) {
          if (getState().mode) {
            document.getElementById(
              `array-${shape}-${c}`
            ).style.backgroundColor = "red";
            await sleep(getState().speed);
            document.getElementById(
              `array-${shape}-${c}`
            ).style.backgroundColor = "white";
          }
          array[c] = count[i][j];
          ++c;
          dispatch({ type: SWAP_ARRAY, array: [...array] });
          if (!getState().mode) {
            await sleep(getState().speed);
          }
          if (!getState().curState) {
            break;
          }
        }
        if (!getState().curState) {
          break;
        }
      }
      if (!getState().curState) {
        break;
      }
    }

    dispatch({ type: SWAP_ARRAY, array: [...array] });
    if (getState().curState) {
      dispatch({ type: TOGGLE_STATE });
    }
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
