import { takeEvery, take, fork, all, call, actionChannel} from 'redux-saga/effects';
import { GET_CAR_TO_FLOOR_2 } from '../../Car/action';

function* onParkAction(payload) {
    const response = yield call(fetch,"http://localhost:8080/getCar/2");
    const car = yield response.json();
    console.log(car);
}

function* onParkMe(){
    yield takeEvery(GET_CAR_TO_FLOOR_2, onParkAction)
}

export function* floor2CarSaga()
{
     // 1- Create a channel for request actions
    const requestChan = yield actionChannel(GET_CAR_TO_FLOOR_2);
    console.log(requestChan);
    
    while (true) {
        const {payload} = yield take(requestChan)
        yield call(onParkAction(), payload)
    }
    
}
