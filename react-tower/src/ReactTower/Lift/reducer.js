import { ADD } from './action';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
        return state+1;
    default: {
      return state;
    }
  }
};

export default reducer;
