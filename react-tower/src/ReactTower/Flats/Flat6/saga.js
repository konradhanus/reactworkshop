import { take, actionChannel, call } from 'redux-saga/effects';
import {GET_CAR_TO_FLOOR_6} from '../../Car/action';
import React from "react";

export function* floor6CarSaga()
{
    const onGetCarChannel = yield actionChannel(GET_CAR_TO_FLOOR_6);

    while(true) {
        yield take(onGetCarChannel);
        const response = yield call(fetch, "http://localhost:8080/getCar/6");
        const car = yield response.json();
        console.log(car.car);
    }
}