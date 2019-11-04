import { ARRAY_CHANGE } from "./types";

const maxHeight = window.screen.height * 0.87;

const setArray = size => {
  return dispatch => {
    const array = [];
    for (let i = 0; i < size; ++i) {
      array.push(getRandomInt(50, maxHeight));
    }

    dispatch({
      type: ARRAY_CHANGE,
      payload: {
        array: array,
        size: size
      }
    });
  };
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default setArray;
