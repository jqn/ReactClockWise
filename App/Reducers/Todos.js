import createReducer from '../Lib/CreateReducer';
import * as types from '../Actions/Types';

export const addTodo = createReducer(
  {},
  {
    [types.ADD_TODO](state, action) {
      console.log('state', state);
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];
    },
  },
);
