import { takeEvery, fork, all, delay } from 'redux-saga/effects';
import { GET_CAR_TO_FLOOR_2 } from './action';

function* onShowAlert(action){
    
    yield alert('2');
    //http://www.randomnumberapi.com/api/v1.0/random
}


function* getCar(){
    yield takeEvery(GET_CAR_TO_FLOOR_2, onShowAlert)
}

export function* flat2Saga()
{
    yield all([fork(getCar)])
}