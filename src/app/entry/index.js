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
const json = require('../../data/kirsten-conversation.json');
// TODO: scroll-message-section + refactoring + redux + interactions + modals + sprites

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);

console.log(json);

if (module.hot && process.env.NODE_ENV !== 'prod') {
  module.hot.accept('../component', () => {
    const NextApp = require('../component').default;
    ReactDOM.render(
      <NextApp/>,
      document.getElementById('root')
    );
  });
}