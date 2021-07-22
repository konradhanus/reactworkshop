import { MOVE_TO_FLOOR_4, MOVE_TO_FLOOR_6 } from "./action";

const initialState = 988;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TO_FLOOR_4:
      return 592;
    case MOVE_TO_FLOOR_6:
      return 328;
    default: {
      return state;
    }
  }
};

export default reducer;
