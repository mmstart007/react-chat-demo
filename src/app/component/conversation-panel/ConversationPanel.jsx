'use strict';

import React from 'react';
import conversations from './data';
import LoaderWrapper from '../loader/ComponentWrapper';
import './styles.css';

const ConversationSearch = () => (
  <header className="searchConversationContainer">
    <input className="searchConversation" placeholder="Search"/>
  </header>
);

const WrappedImage = LoaderWrapper(({src}) => <img src={src}/>);
const Conversation = ({title, text, imgSrc, time}) => (
  <section className="conversation">
    <figure className="conversationImg">
      <WrappedImage src={imgSrc}/>
    </figure>
    <section className="message">
      <div className="messageContent">
        <span className="conversationTitle">{title}</span>
        <p className="conversationText">{text.length > 26 ? `${text.slice(0, 26)}...` : text.slice(0, 26)}</p>
      </div>
      <div className="messageInfo">
        <span className="moreButton"/>
        <span className="conversationTime">{time}</span>
      </div>
    </section>
  </section>
);

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
            conversations.map(
              con => <Conversation
                key={con.title}
                title={con.title}
                imgSrc={con.imgSrc}
                text={con.text}
                time={con.time}
              />
            )
          }
        </section>
      </section>
    );
  }
}