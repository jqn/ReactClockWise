/**
 * App/Reducers/Todos.js
 */
import createReducer from '../Lib/CreateReducer';
import * as types from '../Actions/Types';

export const Todos = createReducer([], {
  [types.ADD_TODO](state, action) {
    return [
      ...state,
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text,
        timestamp: action.timestamp,
        datestamp: action.datestamp
      }
    ];
  },
  [types.DELETE_TODO](state, action) {
    return state.filter(todo => todo.id !== action.id);
  },
  [types.EDIT_TODO](state, action) {
    return state.map(
      todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
    );
  },
  [types.COMPLETE_TODO](state, action) {
    return state.map(
      todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    );
  },
  [types.TRACK_TODO](state, action) {
    return state.map(
      todo =>
        todo.id === action.id ? { ...todo, timestamp: action.timestamp } : todo
    );
  },
  [types.COMPLETE_ALL](state, action) {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }));
  },
  [types.CLEAR_COMPLETED](state, action) {
    return state.filter(todo => todo.completed === false);
  },
  [types.START](state, action) {
    return state.map(
      todo =>
        todo.id === action.id ? { ...todo, status: action.status } : todo
    );
  },
  [types.PAUSE](state, action) {
    return state.map(
      todo =>
        todo.id === action.id
          ? { ...todo, status: action.status, timestamp: action.timestamp }
          : todo
    );
  },
  [types.RESET](state, action) {
    return state.map(
      todo =>
        todo.id === action.id
          ? {
              ...todo,
              status: action.status,
              timestamp: action.timestamp,
              datestamp: action.datestamp
            }
          : todo
    );
  }
});
