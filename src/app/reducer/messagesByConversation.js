'use strict';

import * as ActionTypes from '../action/constants';

const initState = {
  isFetching: false,
  didInvalidate: false,
  messages: [],
};

const messages = (state = initState, action) => {
  switch (action.type) {
  case ActionTypes.DELETE_CONVERSATION:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case ActionTypes.REQUEST_MESSAGES:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case ActionTypes.RECEIVE_MESSAGES:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      messages: action.payload.messages,
      lastUpdated: action.payload.receivedAt
    });
  case ActionTypes.SEND_MESSAGE:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      messages: [...state.messages, action.payload.message]
    });
  default:
    return state;
  }
};

const messagesByConversation = (state = {}, action) => {
  switch (action.type) {
  case ActionTypes.SEND_MESSAGE:
  case ActionTypes.DELETE_CONVERSATION:
  case ActionTypes.REQUEST_MESSAGES:
  case ActionTypes.RECEIVE_MESSAGES: {
    const toMessages = Array.isArray(state) ?
      state.filter(con => con.id === action.payload.conversation)[0]
      : state[action.payload.conversation];
    return Object.assign({}, state, {
      [action.payload.conversation]: messages(toMessages, action)
    });
  }
  default:
    return state;
  }
};

export default messagesByConversation;