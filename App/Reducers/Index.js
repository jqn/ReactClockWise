/**
 * App/Reducers/index.js
 */
import { combineReducers } from 'redux';
import * as todosReducer from './Todos';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage
};

export default persistCombineReducers(config, Object.assign(todosReducer));
