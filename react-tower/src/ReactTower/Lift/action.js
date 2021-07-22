export const MOVE_TO_FLOOR_4 = "@counter/MOVE_TO_FLOOR_4";
export const MOVE_TO_FLOOR_6 = "@counter/MOVE_TO_FLOOR_6";
// export const EDIT = "@counter/EDIT";

export const actionCreator = {
    moveToFloor4: () => ({ type: MOVE_TO_FLOOR_4 }),
    moveToFloor6: () => ({ type: MOVE_TO_FLOOR_6 })
    // edit: () => ({ type: EDIT, payload: {value: "MATRIX 3"}, meta: 3})
}