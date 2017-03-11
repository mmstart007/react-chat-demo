'use strict';
import 'isomorphic-fetch';
import * as Actions from './constants';

export const selectConversation = (conversation) => {
  return {
    type: Actions.SELECT_CONVERSATION,
    payload: conversation,
  };
};

// export const invalidateConversation = (conversation) => {
//   return {
//     type: Actions.INVALIDATE_CONVERSATION,
//     payload: conversation,
//   };
// };

const fetchMessages = (conversation) => {
  return dispatch => {
    dispatch(requestMessages(conversation));
    return fetch('../../data/conversations.json', {method: 'GET'})
      .then(response => response.json())
      .then(json => dispatch(receiveConversations(json)))
      .then(json => {
        dispatch(receiveMessages(conversation, json.payload.filter(i => i.title === conversation)[0].messages));
      });
  };
};

const requestMessages = (conversation) => {
  return {
    type: Actions.REQUEST_MESSAGES,
    payload: conversation,
  };
};

const receiveConversations = (json) => {
  return {
    type: Actions.RECEIVE_CONVERSATIONS,
    payload: json,
  };
};

const receiveMessages = (conversation, json) => {
  return {
    type: Actions.RECEIVE_MESSAGES,
    payload: {
      conversation: conversation,
      messages: json,
      receivedAt: Date.now()
    },
  };
};

export const fetchMessagesIfNeeded = (conversation) => {
  return (dispatch, getState) => {
    if (shouldFetchMessages(getState(), conversation)) {
      return dispatch(fetchMessages(conversation));
    }
  };
};

const shouldFetchMessages = (state, conversation) => {
  const messages = state.messagesByConversation[conversation];
  if (!messages) {
    return true;
  } else if (messages.isFetching) {
    return false;
  } else {
    return messages.didInvalidate;
  }
};