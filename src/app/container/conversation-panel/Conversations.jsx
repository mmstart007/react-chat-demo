'use strict';

import {connect} from 'react-redux';
import * as AsyncActions from '../../action/asyncActions';
import ConversationPanel from '../../component/conversation-panel/ConversationPanel';

const mapStateToProps = (state) => {
  const pattern = state.filterConversations;
  const filteredConversations = state.conversations.filter(con => con.title.search(new RegExp(pattern, 'i')) > -1);
  return {
    conversations: pattern ? filteredConversations : state.conversations,
    showConversationList: state.conversationAppearance,
    selectedConversation: state.selectedConversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseConversation: (conversation) => {
      dispatch(AsyncActions.selectConversation(conversation));
    },
    deleteConversation: (conversation) => {
      dispatch(AsyncActions.deleteConversation(conversation));
      dispatch(AsyncActions.selectConversation(0));
    },
    pinConversation: (conversation) => {
      dispatch(AsyncActions.pinConversation(conversation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationPanel);