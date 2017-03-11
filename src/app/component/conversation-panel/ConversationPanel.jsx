'use strict';

import React from 'react';
import MoreButton from '../more-button/MoreButton';
import LoaderWrapper from '../loader/ComponentWrapper';
import './styles.css';
import '../more-button/modalStyle.css';

const ConversationSearch = () => (
  <header className="searchConversationContainer">
    <input className="searchConversation" placeholder="Search"/>
  </header>
);

const WrappedImage = LoaderWrapper(({src}) => <img src={src}/>);
class Conversation extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, text, imgSrc, time} = this.props;
    return (
      <section
        className="conversation"
        onClick={() => {
          this.props.chooseConversation(title.split(' ')[0].toLowerCase());
        }}
      >
        <figure className="conversationImg">
          <WrappedImage src={`assets/conversations/${imgSrc}.png`}/>
        </figure>
        <section className="message">
          <div className="messageContent">
            <span className="conversationTitle">{title}</span>
            <p className="conversationText">{text.length > 26 ? `${text.slice(0, 26)}...` : text.slice(0, 26)}</p>
          </div>
          <div className="messageInfo">
            <MoreButton/>
            <span className="conversationTime">{time}</span>
          </div>
        </section>
      </section>
    );
  }
}


Conversation.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
};

export default class ConversationPanel extends React.PureComponent {
  render() {
    return (
      <section className="conversationPanelContainer">
        <ConversationSearch/>
        <section>
          {
            this.props.conversations.map(
              con => <Conversation
                key={con.title}
                title={con.title}
                imgSrc={con.title}
                text={con.messages[con.messages.length - 1].text}
                time={con.messages[con.messages.length - 1].time}
                {...this.props}/>
            )
          }
        </section>
      </section>
    );
  }
}