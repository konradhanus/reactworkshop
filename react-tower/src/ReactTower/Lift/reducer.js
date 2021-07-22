import { ADD, MOVE_TO_FLOOR_6, MOVE_TO_FLOOR_2 } from './action';

const initialState = 1000;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
        return state+1;
    case MOVE_TO_FLOOR_6:
        return 328;
    case MOVE_TO_FLOOR_2:
        return 850;
    default: {
      return state;
    }
  }
};

export default reducer;
