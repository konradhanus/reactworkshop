import { take, actionChannel, call, put } from 'redux-saga/effects';
import {GET_CAR_TO_FLOOR_6, actionCreator} from '../../Car/action';

export function* floor6CarSaga()
{
    const onGetCarChannel = yield actionChannel(GET_CAR_TO_FLOOR_6);

    while(true) {
        yield take(onGetCarChannel);
        const response = yield call(fetch, "http://localhost:8081/getCar/6");
        const car = yield response.json();
        console.log(car.car);
        yield put(actionCreator.showCar(car.car));
    }
}