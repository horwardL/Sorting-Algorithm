const initialState = {
  size: Math.floor(((window.screen.width - 222) / 3.33) * 0.5),
  speed: 0,
  array: []
};

const maxHeight = window.screen.height * 0.87;

export const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARRAY_CHANGE":
      return {
        ...state,
        size: action.size,
        array: generateArray(action.size)
      };
    case "SPEED_CHENGE":
      return {
        ...state,
        speed: action.speed
      };
    default:
      return state;
  }
};

function generateArray(size) {
  const array = [];
  for (let i = 0; i < size; ++i) {
    array.push(getRandomInt(5, maxHeight));
  }

  return array;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
