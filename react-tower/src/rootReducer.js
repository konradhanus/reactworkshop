import { combineReducers } from 'redux';
import counterReducer from './ReactTower/Counter/reducer';
import liftReducer from './ReactTower/Lift/reducer';
import carReducer from './ReactTower/Car/reducer';

const rootReducer = () => combineReducers({
    counter: counterReducer,
    lift: liftReducer,
    car: carReducer
})

export default rootReducer;