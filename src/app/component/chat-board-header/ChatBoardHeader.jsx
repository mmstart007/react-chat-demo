'use strict';

import React from 'react';
import ChatBoardModal from '../chat-board-modal/ChatBoardModal';
import {browserHistory} from 'react-router';
import './styles.css';

export default class ChatBoardHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {showAttachmentModal: false};
  }

  render() {
    return (
      <header className="chatBoardHeader">
        {/*<span className="messageStatus"><strong>{this.props.title}</strong> is typing...</span>*/}
        <section className="chatButtonsSection">
          <a
            href="/attachments/photo"
            className="chatButton attachmentsButton"
            onClick={(e) => {
              e.preventDefault();
              const href = e.target.getAttribute('href');
              browserHistory.push(href);
              this.setState({showAttachmentModal: !this.state.showAttachmentModal});
            }}/>
          <span className="chatButton favouriteButton"/>
          <span className="chatButton callButton"/>
          <span className="chatButton videoCallButton"/>
        </section>
        {this.state.showAttachmentModal && <ChatBoardModal onClose={() => this.setState({showAttachmentModal: false})}/>}
      </header>
    );
  }
}
ChatBoardHeader.propTypes = {
  title: React.PropTypes.string,
};