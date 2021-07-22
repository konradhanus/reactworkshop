import { ADD, ADD_FLOOR_2, ADD_FLOOR_3, ADD_FLOOR_4, ADD_FLOOR_6 } from './action';
import { tvFlat2 } from '../Flats/Flat2/config'

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
        return state+1;
    case ADD_FLOOR_2:
        return state + tvFlat2;
    case ADD_FLOOR_3:
      // return parseFloat(state + 0.01).toFixed(2);
      return Math.round(100 * state + 1) / 100;
    case ADD_FLOOR_4:
        return state + action.payload;
    case ADD_FLOOR_6:
        return Math.round(100 * (state + 3.141592)) / 100;
    default: {
      return state;
    }
  }
};

export default reducer;
