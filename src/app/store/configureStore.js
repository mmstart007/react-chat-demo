'use strict';
/* global module */
/* global process */

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );
  if (module.hot && process.env.NODE_ENV !== 'prod') {
    module.hot.accept('../reducer', () => {
      store.replaceReducer(initialState);
    });
  }
  return store;
};

export default configureStore;