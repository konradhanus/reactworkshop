export const GET_CAR_TO_FLOOR_2 = "@car/GET_CAR_TO_FLOOR_2";
export const GET_CAR_TO_FLOOR_6 = "@car/GET_CAR_TO_FLOOR_6";
export const FARAWAY_CAR_FROM_FLOOR_6 = "@car/FARAWAY_CAR_FROM_FLOOR_6";
export const GET_CAR_TO_FLOOR_7 = "@car/GET_CAR_TO_FLOOR_7";
export const SHOW_CAR = "@car/SHOW_CAR"

export const actionCreator = {
    getCarToFloor2: () => ({ type: GET_CAR_TO_FLOOR_2 }),
    getCarToFloor6: () => ({ type: GET_CAR_TO_FLOOR_6 }),
    farawayCarFromFloor6: () => ({ type: FARAWAY_CAR_FROM_FLOOR_6 }),
    getCarToFloor7: () => ({ type: GET_CAR_TO_FLOOR_7 }),
    showCar: (carID) => ({ type: SHOW_CAR, payload: carID }),
}