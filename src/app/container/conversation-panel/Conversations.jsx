'use strict';

import {connect} from 'react-redux';
// import * as Actions from '../../action/actions';
import * as AsyncActions from '../../action/asyncActions';
import ConversationPanel from '../../component/conversation-panel/ConversationPanel';

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseConversation: (conversation) => {
      dispatch(AsyncActions.selectConversation(`${conversation}`));
    },
    // deleteConversation: (conversation) => {
    //  delete
    // },
    // pinConversation: (conversation) => {
    //  pin
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationPanel);