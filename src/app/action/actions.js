'use strict';
import * as ActionTypes from './constants';

export const sendMessage = (message, conversation) => {
  return {
    type: ActionTypes.SEND_MESSAGE,
    payload: {
      message,
      conversation,
    },
  };
};

export const filtration = (filter) => {
  return {
    type: ActionTypes.FILTRATION,
    payload: filter,
  };
};