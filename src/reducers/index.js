import { combineReducers } from 'redux';
import { testRedc } from './init';

const reducers = {
    quizes: testRedc
};

export default combineReducers(reducers);
