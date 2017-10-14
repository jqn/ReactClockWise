import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './App/Reducers';
import App from './App/Containers/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
console.log('process', process.env);
// middleware that logs actions
const loggerMiddleware = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV === 'development',
});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
