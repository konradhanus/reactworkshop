import {GET_CAR_TO_FLOOR_6, FARAWAY_CAR_FROM_FLOOR_6} from "./action";

const initialVisibility = true;

const reducer = (isVisible = initialVisibility, action) => {
    switch (action.type) {
        case GET_CAR_TO_FLOOR_6:
            return true;
            break;

        case FARAWAY_CAR_FROM_FLOOR_6:
            return false;
            break;

        default: {
            return isVisible;
        }
    }
};

export default reducer;