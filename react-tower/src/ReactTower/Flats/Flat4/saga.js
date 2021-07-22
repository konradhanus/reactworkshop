import { takeEvery, fork, all, delay, call } from 'redux-saga/effects';
import {SUMMON_FLOOR_4_CAR} from '../../Lift/action';
import fetchNumber from "./fetchNumber";

function* onSummonFloor4Car(action) {
    const number = yield call(fetchNumber);
    yield console.log(`Wezwano samochód z piętra 4: ${number}`);
} 

function* summonCar(){
    yield takeEvery(SUMMON_FLOOR_4_CAR, onSummonFloor4Car);
}

export function* floor4CarSaga()
{
    yield all([fork(summonCar)])
}
