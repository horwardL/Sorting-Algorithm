import { SWAP_ARRAY, TOGGLE_STATE } from "../types";

function heapSort() {
  return async (dispatch, getState) => {
    let array = [...getState().array.array];
    let size = getState().array.size;
    let left, right, temp, j, newJ;
    for (let i = Math.floor(size / 2 - 1); i >= 0; --i) {
      j = newJ = i;
      if (getState().shape === "bar") {
        document.getElementById(`array-bar-${i}`).style.backgroundColor =
          "green";
      } else {
        document.getElementById(`array-dot-${i}`).style.backgroundColor =
          "green";
      }
      while (j < size) {
        newJ = j;
        left = j * 2 + 1;
        right = j * 2 + 2;
        if (left < size && array[left] > array[newJ]) {
          newJ = left;
          if (getState().shape === "bar") {
            document.getElementById(`array-bar-${left}`).style.backgroundColor =
              "red";
          } else {
            document.getElementById(`array-dot-${left}`).style.backgroundColor =
              "red";
          }
        }

        if (right < size && array[right] > array[newJ]) {
          if (getState().shape === "bar") {
            document.getElementById(`array-bar-${left}`).style.backgroundColor =
              "white";
            newJ = right;
            document.getElementById(`array-bar-${newJ}`).style.backgroundColor =
              "red";
          } else {
            document.getElementById(`array-dot-${left}`).style.backgroundColor =
              "white";
            newJ = right;
            document.getElementById(`array-dot-${newJ}`).style.backgroundColor =
              "red";
          }
        }
        if (newJ !== j) {
          await sleep(getState().speed);
          if (getState().shape === "bar") {
            document.getElementById(`array-bar-${newJ}`).style.backgroundColor =
              "white";
          } else {
            document.getElementById(`array-dot-${newJ}`).style.backgroundColor =
              "white";
          }
          temp = array[j];
          array[j] = array[newJ];
          array[newJ] = temp;
          j = newJ;
          dispatch({
            type: SWAP_ARRAY,
            array: [...array]
          });
        } else {
          break;
        }
        if (!getState().curState) {
          break;
        }
      }
      if (getState().shape === "bar") {
        document.getElementById(`array-bar-${i}`).style.backgroundColor =
          "white";
      } else {
        document.getElementById(`array-dot-${i}`).style.backgroundColor =
          "white";
      }
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
      j = newJ = 0;
      if (getState().shape === "bar") {
        document.getElementById(`array-bar-${i}`).style.backgroundColor =
          "green";
      } else {
        document.getElementById(`array-dot-${i}`).style.backgroundColor =
          "green";
      }
      while (j < i) {
        newJ = j;
        left = j * 2 + 1;
        right = j * 2 + 2;
        if (getState().shape === "bar") {
          document.getElementById(`array-bar-${newJ}`).style.backgroundColor =
            "red";
        } else {
          document.getElementById(`array-dot-${newJ}`).style.backgroundColor =
            "red";
        }
        if (left < i && array[left] > array[newJ]) {
          newJ = left;
        }

        if (right < i && array[right] > array[newJ]) {
          newJ = right;
        }
        await sleep(getState().speed);
        if (getState().shape === "bar") {
          document.getElementById(`array-bar-${j}`).style.backgroundColor =
            "white";
        } else {
          document.getElementById(`array-dot-${j}`).style.backgroundColor =
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
        } else {
          break;
        }
        if (!getState().curState) {
          break;
        }
      }
      if (getState().shape === "bar") {
        document.getElementById(`array-bar-${i}`).style.backgroundColor =
          "white";
      } else {
        document.getElementById(`array-dot-${i}`).style.backgroundColor =
          "white";
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

export default heapSort;
