import * as types from './Types';

export function addTodo(text, timestamp, datestamp) {
  return { type: types.ADD_TODO, text, timestamp, datestamp };
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

export function start(status, id) {
  return {
    type: types.START,
    status,
    id,
  };
}

export function pause(status, id, timestamp) {
  return {
    type: types.PAUSE,
    status,
    id,
    timestamp,
  };
}

export function reset(status, id, timestamp, datestamp) {
  return {
    type: types.RESET,
    status,
    id,
    timestamp,
    datestamp,
  };
}
