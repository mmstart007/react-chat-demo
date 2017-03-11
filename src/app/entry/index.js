'use strict';
/* global module */
/* global require */
/* global process */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../component';
import './style.css';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
// import {Router, browserHistory, Route, IndexRoute} from 'react-router';
// TODO: refactoring + sprites

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);


if (module.hot && process.env.NODE_ENV !== 'prod') {
  module.hot.accept('../component', () => {
    const NextApp = require('../component').default;
    ReactDOM.render(
      <NextApp/>,
      document.getElementById('root')
    );
  });
}