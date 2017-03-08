'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import * as AsyncActions from '../../action/asyncActions';
import ChatBoard from '../../component/chat-board/ChatBoard';

const mapStateToProps = (state) => {
  const {selectedConversation, messagesByConversation} = state;
  const {isFetching, lastUpdated, messages} = messagesByConversation[selectedConversation] || {
    isFetching: true,
    messages: []
  };
  return {
    selectedConversation,
    messages,
    isFetching,
    lastUpdated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(Actions.sendMessage(message));
    },
    fetchMessages: (conversation) => {
      dispatch(AsyncActions.fetchMessagesIfNeeded(conversation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoard);

