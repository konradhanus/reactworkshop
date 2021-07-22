import { applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const configureStore = (preloadedState) => createStore(
        rootReducer(), 
        preloadedState,
        middleware);


export default configureStore