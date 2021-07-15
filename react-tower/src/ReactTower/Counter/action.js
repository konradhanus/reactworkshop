export const ADD = "@counter/ADD";
export const ADD_FLOOR_2 = "@counter/ADD_FLOOR_2";
export const ADD_FLOOR_3 = "@counter/ADD_FLOOR_3";
export const ADD_FLOOR_4 = "@counter/ADD_FLOOR_4";
export const ADD_FLOOR_6 = "@counter/ADD_FLOOR_6";

// export const EDIT = "@counter/EDIT";
export const actionCreator = {
    add: () => ({ type: ADD }),
    addFloor2: () => ({ type: ADD_FLOOR_2 }),
    addFloor3: () => ({ type: ADD_FLOOR_3 }),
    addFloor4: (payload) => ({ type: ADD_FLOOR_4, payload }),
    addFloor6: () => ({ type: ADD_FLOOR_6 })
    // edit: () => ({ type: EDIT, payload: {value: "MATRIX 3"}, meta: 3})
}