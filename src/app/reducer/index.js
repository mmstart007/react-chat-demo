'use strict';

import {combineReducers} from 'redux';
import * as Actions from '../action/constants';

const selectedConversation = (state = 'matt', action) => {
  switch (action.type) {
  case Actions.SELECT_CONVERSATION:
    return action.payload;
  default:
    return state;
  }
};

const initState = {
  isFetching: false,
  didInvalidate: false,
  messages: [],
};

const messages = (state = initState, action) => {
  switch (action.type) {
  case Actions.INVALIDATE_CONVERSATION:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case Actions.REQUEST_MESSAGES:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case Actions.RECEIVE_MESSAGES:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      messages: action.payload.messages,
      lastUpdated: action.payload.receivedAt
    });
  case Actions.SEND_MESSAGE:
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
  case Actions.SEND_MESSAGE:
  case Actions.INVALIDATE_CONVERSATION:
  case Actions.RECEIVE_MESSAGES:
  case Actions.REQUEST_MESSAGES:
    return Object.assign({}, state, {
      [action.payload.conversation]: messages(state[action.payload.conversation], action)
    });
  default:
    return state;
  }
};

const conversations = (state = [], action) => {
  switch (action.type) {
  case Actions.RECEIVE_CONVERSATIONS:
    return action.payload;
  default:
    return state;
  }
};


const stubUser = () => {
  return {
    name: 'Dave Dave',
    imgSrc: 'dave',
  };
};

const rootReducer = combineReducers({
  selectedConversation,
  messagesByConversation,
  conversations,
  stubUser,
});

export default rootReducer;