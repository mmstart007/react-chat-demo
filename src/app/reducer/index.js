'use strict';

import {combineReducers} from 'redux';
import * as ActionTypes from '../action/constants';
import messagesByConversation from './messagesByConversation';
import conversationAppearance from './conversationAppearance';
import conversations from './conversations';

const selectedConversation = (state = 0, action) => {
  switch (action.type) {
  case ActionTypes.SELECT_CONVERSATION:
    return action.payload;
  default:
    return state;
  }
};

export const filterConversations = (state = '', action) => {
  switch (action.type) {
  case ActionTypes.FILTRATION:
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
  filterConversations,
  conversationAppearance,
});

export default rootReducer;