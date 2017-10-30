import createReducer from '../Lib/CreateReducer';
import * as types from '../Actions/Types';

export const Todos = createReducer([], {
  [types.ADD_TODO](state, action) {
    localStorage.setItem('todos', 'test');
    return [
      ...state,
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text,
      },
    ];
  },
  [types.DELETE_TODO](state, action) {
    return state.filter(todo => todo.id !== action.id);
  },
  [types.EDIT_TODO](state, action) {
    return state.map(
      todo => (todo.id === action.id ? { ...todo, text: action.text } : todo),
    );
  },
  [types.COMPLETE_TODO](state, action) {
    return state.map(
      todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
    );
  },
  [types.TRACK_TODO](state, action) {
    return state.map(
      todo =>
        todo.id === action.id ? { ...todo, timestamp: action.timestamp } : todo,
    );
  },
  [types.COMPLETE_ALL](state, action) {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => ({
      ...todo,
      completed: !areAllMarked,
    }));
  },
  [types.CLEAR_COMPLETED](state, action) {
    return state.filter(todo => todo.completed === false);
  },
});

export const Timers = createReducer([], {
  [types.START](state, action) {
    return [
      ...state,
      {
        status: action.status,
        time: action.time,
      },
    ];
  },
  [types.PAUSE](state, action) {
    return [
      ...state,
      {
        status: action.status,
        time: action.time,
      },
    ];
  },
  [types.RESET](state, action) {
    return [];
  },
});
