import { combineReducers } from 'redux';
import counterReducer from './ReactTower/Counter/reducer';

const rootReducer = () => combineReducers({
    counter: counterReducer
})

export default rootReducer;