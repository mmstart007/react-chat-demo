'use strict';

import * as ActionTypes from '../action/constants';

// const pinnedComparator = (a, b) => {
//   if (a.pinned && !b.pinned) {
//     return -1;
//   } else if (!a.pinned && b.pinned) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// const timeComparator = (i, j) => j.lastUpdated - i.lastUpdated;

const conversations = (state = [], action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_CONVERSATIONS:
    return action.payload/*.concat().sort(timeComparator).concat().sort(pinnedComparator)*/;
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
    })/*.concat().sort(timeComparator).concat().sort(pinnedComparator)*/;
  case ActionTypes.SEND_MESSAGE:
    return Object.assign([], state, {
      [action.payload.conversation]: Object.assign({}, state[action.payload.conversation], {
        lastUpdated: action.payload.message.time,
        messages: [...state[action.payload.conversation].messages, action.payload.message],
      }),
    })/*.concat().sort((i, j) => j.lastUpdated - i.lastUpdated).concat().sort(pinnedComparator)*/;
  default:
    return state;
  }
};

export default conversations;