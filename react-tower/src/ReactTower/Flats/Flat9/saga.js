import { takeEvery, take, fork, all, call, actionChannel} from 'redux-saga/effects';
import {CALL_THE_CAR_FLOOR_9} from './action';


function* onCarSaga(action) {
    const response = yield call(fetch,"http://localhost:8080/getCar/9");
    const car = yield response.json();
    console.log(car);
} 

function* carSaga(){
   yield takeEvery(CALL_THE_CAR_FLOOR_9, onCarSaga);
}

export function* floor9CarSaga()
{
    yield all([fork(carSaga)])
}