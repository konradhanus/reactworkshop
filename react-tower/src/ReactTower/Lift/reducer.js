import { ADD, MOVE_TO_FLOOR_6 } from './action';

const initialState = 500;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
        return state+1;
    case MOVE_TO_FLOOR_6:
        return 328;
    default: {
      return state;
    }
  }
};

export default reducer;
