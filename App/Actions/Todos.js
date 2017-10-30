import * as types from './Types';

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id };
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text };
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id };
}

export function trackTodo(id, text, timestamp) {
  return { type: types.TRACK_TODO, id, timestamp };
}

export function completeAll() {
  return { type: types.COMPLETE_ALL };
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
}

export function start(status, time) {
  return {
    type: types.START,
    status,
    time,
  };
}

export function pause(status, time) {
  return {
    type: types.PAUSE,
    status,
    time,
  };
}

export function reset() {
  return { type: types.RESET };
}
