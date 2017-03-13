'use strict';

import * as ActionTypes from '../action/constants';

const pinnedComparator = (a, b) => {
  if (a.pinned && !b.pinned) {
    return -1;
  } else if (!a.pinned && b.pinned) {
    return 1;
  } else {
    return 0;
  }
};
const timeComparator = (i, j) => j.lastUpdated - i.lastUpdated;

const conversations = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_CONVERSATIONS:
    return (state.length > 0 ? state : action.payload)/*Array.from(Object.assign([], action.payload, state))*/.sort(timeComparator).sort(pinnedComparator);
  case ActionTypes.DELETE_CONVERSATION:
    return state.filter(i => i.id !== action.payload || i.id === 0);
  case ActionTypes.SET_PINNED:
    return Array.from(state.map(con => {
      if (con.id !== action.payload || con.id === 0) {
        return con;
      }
      return Object.assign({}, con, {
        pinned: !con.pinned,
      });
    })).sort(timeComparator).sort(pinnedComparator);
  case ActionTypes.SEND_MESSAGE: {
    const conversation = action.payload.conversation;
    return [...state.filter(con => con.id !== conversation),
      Object.assign({}, ...state.filter(con => con.id === conversation), {
        lastUpdated: action.payload.message.time,
        messages: [...state.filter(con => con.id === conversation), action.payload.message],
      })].sort(timeComparator).sort(pinnedComparator);
  }
  default:
    return state;
  }
};

export default conversations;