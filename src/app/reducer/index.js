'use strict';

import {combineReducers} from 'redux';
import * as ActionTypes from '../action/constants';
import messagesByConversation from './messagesByConversation';

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

const conversations = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_CONVERSATIONS:
    return action.payload;
  case ActionTypes.DELETE_CONVERSATION:
    return state.filter(i => i.id !== action.payload || i.id === 0);
  case ActionTypes.SET_PINNED:
    return state.map(con => {
      if (con.id !== action.payload || con.id === 0) {
        return con;
      }
      return Object.assign({}, con, {
        pinned: !con.pinned,
      });
    }).concat().sort((a, b) => {
      if (a.pinned && !b.pinned) {
        return -1;
      } else if (!a.pinned && b.pinned) {
        return 1;
      } else {
        return 0;
      }
    });

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
});

export default rootReducer;