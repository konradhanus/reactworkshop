import { takeEvery, fork, all, delay } from 'redux-saga/effects';
import {GET_CAR_TO_FLOOR_6} from '../../Car/action';

function* onShowAlert() {
    yield alert('6!');
    //http://www.randomnumberapi.com/api/v1.0/random
}

function* onGetCar(){
    yield takeEvery(GET_CAR_TO_FLOOR_6, onShowAlert)
}

export function* floor6CarSaga()
{
    yield all([fork(onGetCar)])
}