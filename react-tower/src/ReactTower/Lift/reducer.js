import { ADD } from './action';

const initialState = 986;

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
