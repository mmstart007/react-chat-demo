'use strict';
import * as ActionTypes from '../action/constants';

const conversationAppearance = (state = true, action) => {
  switch (action.type) {
  case ActionTypes.SHOW_CONVERSATION_LIST:
    return true;
  case ActionTypes.CLOSE_CONVERSATION_LIST:
    return false;
  default:
    return state;
  }
};

export default conversationAppearance;