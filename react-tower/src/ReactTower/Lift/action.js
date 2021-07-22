export const ADD = "@counter/ADD";
export const MOVE_TO_FLOOR_6 = "@counter/MOVE_TO_FLOOR_6";
export const MOVE_TO_FLOOR_2 = "@counter/MOVE_TO_FLOOR_2";
// export const EDIT = "@counter/EDIT";

export const actionCreator = {
    add: () => ({ type: ADD }),
    moveToFloor6: () => ({ type: MOVE_TO_FLOOR_6 }),
    moveToFloor2: () => ({ type: MOVE_TO_FLOOR_2 })
    // edit: () => ({ type: EDIT, payload: {value: "MATRIX 3"}, meta: 3})
}