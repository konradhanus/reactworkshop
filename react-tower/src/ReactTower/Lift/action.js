export const MOVE_TO_FLOOR_4 = "@counter/MOVE_TO_FLOOR_4";
export const MOVE_TO_FLOOR_6 = "@counter/MOVE_TO_FLOOR_6";
export const MOVE_TO_FLOOR_2 = "@counter/MOVE_TO_FLOOR_2";

export const SUMMON_FLOOR_4_CAR = "@car/SUMMON_FLOOR_4_CAR";

export const actionCreator = {
    moveToFloor6: () => ({ type: MOVE_TO_FLOOR_6 }),
    moveToFloor2: () => ({ type: MOVE_TO_FLOOR_2 }),
    moveToFloor4: () => ({ type: MOVE_TO_FLOOR_4 }),
    summonFloor4Car: () => ({ type: SUMMON_FLOOR_4_CAR }),
}