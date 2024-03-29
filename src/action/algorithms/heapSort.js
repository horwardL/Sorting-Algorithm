import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

function heapSort() {
  return async (dispatch, getState) => {
    let array = [...getState().array.array];
    let size = getState().array.size;
    const shape = getState().shape;
    let left, right, temp, j, newJ;
    for (let i = Math.floor(size / 2 - 1); i >= 0; --i) {
      j = newJ = i;
      if (getState().mode) {
        document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
          "green";
      }
      while (j < size) {
        newJ = j;
        left = j * 2 + 1;
        right = j * 2 + 2;
        if (left < size && array[left] > array[newJ]) {
          newJ = left;
          if (getState().mode) {
            document.getElementById(
              `array-${shape}-${left}`
            ).style.backgroundColor = "red";
          }
        }

        if (right < size && array[right] > array[newJ]) {
          if (getState().mode) {
            document.getElementById(
              `array-${shape}-${left}`
            ).style.backgroundColor = "white";
          }
          newJ = right;
          if (getState().mode) {
            document.getElementById(
              `array-${shape}-${newJ}`
            ).style.backgroundColor = "red";
          }
        }
        if (newJ !== j) {
          if (getState().mode) {
            await sleep(getState().speed);

            document.getElementById(
              `array-${shape}-${newJ}`
            ).style.backgroundColor = "white";
          }
          temp = array[j];
          array[j] = array[newJ];
          array[newJ] = temp;
          j = newJ;
          dispatch({
            type: SWAP_ARRAY,
            array: [...array]
          });
          if (!getState().mode) {
            await sleep(getState().speed);
          }
        } else {
          break;
        }
        if (!getState().curState) {
          break;
        }
      }
      document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
        "white";
      if (!getState().curState) {
        break;
      }
    }

    for (let i = size - 1; i >= 0; --i) {
      temp = array[i];
      array[i] = array[0];
      array[0] = temp;
      dispatch({
        type: SWAP_ARRAY,
        array: [...array]
      });
      if (!getState().mode) {
        await sleep(getState().speed);
      }
      j = newJ = 0;
      if (getState().mode) {
        document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
          "green";
      }
      while (j < i) {
        newJ = j;
        left = j * 2 + 1;
        right = j * 2 + 2;
        if (getState().mode) {
          document.getElementById(
            `array-${shape}-${newJ}`
          ).style.backgroundColor = "red";
        }
        if (left < i && array[left] > array[newJ]) {
          newJ = left;
        }

        if (right < i && array[right] > array[newJ]) {
          newJ = right;
        }
        if (getState().mode) {
          await sleep(getState().speed);
          document.getElementById(`array-${shape}-${j}`).style.backgroundColor =
            "white";
        }
        if (newJ !== j) {
          temp = array[j];
          array[j] = array[newJ];
          array[newJ] = temp;
          j = newJ;
          dispatch({
            type: SWAP_ARRAY,
            array: [...array]
          });
          if (!getState().mode) {
            await sleep(getState().speed);
          }
        } else {
          break;
        }
        if (!getState().curState) {
          break;
        }
      }
      document.getElementById(`array-${shape}-${i}`).style.backgroundColor =
        "white";
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

export default heapSort;
