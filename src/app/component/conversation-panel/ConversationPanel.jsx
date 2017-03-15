'use strict';

import React from 'react';
import Conversation from '../conversation/Conversation';
import ConversationSearch from '../../container/conversation-search/ConversationSearch';
import './styles.css';

export default class ConversationPanel extends React.PureComponent {
  render() {
    return (
      this.props.showConversationList &&
      <section className="conversationPanelContainer">
        <ConversationSearch/>
        <section>
          {
            this.props.conversations.map(
              con => {
                return <Conversation
                  key={con.id}
                  id={con.id}
                  pinned={con.pinned}
                  title={con.title}
                  imgSrc={con.imgSrc}
                  text={con.messages[con.messages.length - 1].text}
                  time={con.messages[con.messages.length - 1].time}
                  isSelected={this.props.selectedConversation === con.id}
                  {...this.props}/>;
              }
            )
          }
        </section>
      </section>
    );
  }
}