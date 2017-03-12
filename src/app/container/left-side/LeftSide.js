'use strict';

import {connect} from 'react-redux';
import * as Actions from '../../action/actions';
import LeftSide from '../../component/left-side/LeftSide';

const mapStateToProps = (state) => {
  return {
    showConversationList: state.conversationAppearance,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    showConversationList: () => {
      dispatch(Actions.showConversationList());
    },
    closeConversationList: () => {
      dispatch(Actions.closeConversationList());
    },
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(LeftSide);