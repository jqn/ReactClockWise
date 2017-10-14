import { combineReducers } from 'redux';
import * as todosReducer from './Todos';

export default combineReducers(Object.assign(todosReducer));
