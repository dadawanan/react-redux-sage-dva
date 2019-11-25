import { combineReducers } from 'redux';

import count from './reducer';

import hello from './reducer2';

const rootReducer = combineReducers({
    count,
    hello
})

export default rootReducer;