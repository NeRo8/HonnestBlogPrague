import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

import layoutsReducer from '../reducers';

const store = createStore(layoutsReducer, applyMiddleware(logger));

export default store;
