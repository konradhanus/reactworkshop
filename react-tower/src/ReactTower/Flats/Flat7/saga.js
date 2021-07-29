import {takeEvery, fork, all, call} from 'redux-saga/effects';
import {GET_CAR_TO_FLOOR_7} from '../../Car/action';
import callRandAPI from "./callRandAPI";

function* onParkCar() {
    const number = yield call(callRandAPI);
    yield alert(number);
}

function* onGetCar(){
    yield takeEvery(GET_CAR_TO_FLOOR_7, onParkCar)
}

export function* floor7CarSaga()
{
    yield all([fork(onGetCar)])
}