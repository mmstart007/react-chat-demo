'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import ConversationSearch from '../../component/conversation-search/ConversationSearch';

const mapStateToProps = (state) => {
  return {
    filter: state.filterConversations,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    filterConversations: (filter) => {
      dispatch(Actions.filtration(filter));
    },
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(ConversationSearch);