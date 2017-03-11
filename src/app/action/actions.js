'use strict';
import * as Actions from './constants';

export const sendMessage = (message, conversation) => {
  return {
    type: Actions.SEND_MESSAGE,
    payload: {message, conversation},
  };
};