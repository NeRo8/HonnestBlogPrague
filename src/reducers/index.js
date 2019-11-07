import {combineReducers} from 'redux';

import layoutsReducer from './layoutsReducer';

export default combineReducers({layouts: layoutsReducer});
