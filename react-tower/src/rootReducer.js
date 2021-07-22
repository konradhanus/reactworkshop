import { combineReducers } from 'redux';
import counterReducer from './ReactTower/Counter/reducer';
import liftReducer from './ReactTower/Lift/reducer';

const rootReducer = () => combineReducers({
    counter: counterReducer,
    lift: liftReducer
})

export default rootReducer;