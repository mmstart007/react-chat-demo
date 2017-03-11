'use strict';

import React from 'react';
import Attachments from '../attachments/Attachments';
import './styles.css';
import {browserHistory} from 'react-router';
export default class ChatBoardModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="modal">
        <span className="close" onClick={() => {
          this.props.onClose();
          browserHistory.push('/');
        }}>&times;</span>
        <section className="modal-content">
          <Attachments/>
        </section>
      </section>
    );
  }
}

ChatBoardModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};