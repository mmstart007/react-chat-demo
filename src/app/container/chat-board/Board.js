'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import * as AsyncActions from '../../action/asyncActions';
import ChatBoard from '../../component/chat-board/ChatBoard';

const mapStateToProps = (state) => {
  const {selectedConversation, messagesByConversation, stubUser} = state;
  const {isFetching, lastUpdated, messages} = messagesByConversation[selectedConversation] || {
    isFetching: true,
    messages: []
  };
  return {
    selectedConversation,
    stubUser,
    messages,
    isFetching,
    lastUpdated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message, conversation) => {
      dispatch(Actions.sendMessage(message, conversation));
    },
    fetchMessages: (conversation) => {
      dispatch(AsyncActions.fetchMessagesIfNeeded(conversation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoard);

