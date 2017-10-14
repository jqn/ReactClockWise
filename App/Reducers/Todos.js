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
      },
    ];
  },
  [types.DELETE_TODO](state, action) {
    return state.filter(todo => todo.id !== action.id);
  },
  [types.EDIT_TODO](state, action) {
    console.log('edit state', state);
    return state.map(
      todo =>
        todo.id === action.id
          ? { id: todo.id, completed: todo.completed, text: action.text }
          : todo,
    );
  },
  [types.COMPLETE_TODO](state, action) {
    return state.map(
      todo =>
        todo.id
          ? { id: todo.id, completed: !todo.completed, text: todo.text }
          : todo,
    );
  },
  [types.COMPLETE_ALL](state, action) {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => ({
      id: todo.id,
      completed: !areAllMarked,
      text: todo.text,
    }));
  },
  [types.CLEAR_COMPLETED](state, action) {
    return state.filter(todo => todo.completed === false);
  },
});
