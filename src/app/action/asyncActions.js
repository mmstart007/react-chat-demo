'use strict';
import 'isomorphic-fetch';
import * as ActionTypes from './constants';

export const selectConversation = (conversation) => {
  return {
    type: ActionTypes.SELECT_CONVERSATION,
    payload: conversation,
  };
};

export const deleteConversation = (conversation) => {
  return {
    type: ActionTypes.DELETE_CONVERSATION,
    payload: conversation,
  };
};

export const pinConversation = (conversation) => {
  return {
    type: ActionTypes.SET_PINNED,
    payload: conversation,
  };
};

const fetchMessages = (conversation) => {
  return dispatch => {
    dispatch(requestMessages(conversation));
    return fetch('../../data/conversations.json', {method: 'GET'})
      .then(response => response.json())
      .then(json => dispatch(receiveConversations(json)))
      .then(json => {
        dispatch(receiveMessages(conversation, json.payload.filter(con => con.id === conversation).pop().messages));
      });
  };
};

const requestMessages = (conversation) => {
  return {
    type: ActionTypes.REQUEST_MESSAGES,
    payload: {
      conversation
    },
  };
};

const receiveConversations = (json) => {
  return {
    type: ActionTypes.RECEIVE_CONVERSATIONS,
    payload: json,
  };
};

const receiveMessages = (conversation, json) => {
  return {
    type: ActionTypes.RECEIVE_MESSAGES,
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