import { takeEvery, fork, all, delay } from 'redux-saga/effects';
import { GET_CAR_TO_FLOOR_2 } from '../../Car/action';

function* onParkAction() {
    yield console.log('Park Me action');
    //http://www.randomnumberapi.com/api/v1.0/random
}

function* onParkMe(){
    yield takeEvery(GET_CAR_TO_FLOOR_2, onParkAction)
}

export function* floor2CarSaga()
{
    yield all([fork(onParkMe)])
}