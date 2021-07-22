import { takeEvery, fork, all, delay } from 'redux-saga/effects';
import {MOVE_TO_FLOOR_2} from './action';

function* onShowAlert(action){
    
    yield console.log('strzał do api');
    yield delay(5000);
    yield console.log('strzał do poprawny');
}

function* showAlert(){
    yield takeEvery(MOVE_TO_FLOOR_2, onShowAlert);
}

export function* liftSaga()
{
    yield all([fork(showAlert)])
}