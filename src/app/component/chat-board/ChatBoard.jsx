'use strict';
import React from 'react';
import LoaderWrapper from '../loader/ComponentWrapper';
import * as Utils from '../../utils/utils';
import './styles.css';
import './chat-board-section.css';
import ChatBoardHeader from '../chat-board-header/ChatBoardHeader';
import InputField from '../chat-board-input/InputField';

const WrappedImage = LoaderWrapper(({src}) => <img src={src}/>);
const Message = ({text, time, imgSrc, isMine}) => {
  const messageStyle = `messageInConversation ${isMine ? 'myMessage' : 'userMessage'}`;
  const messageTextStyles = `messageText ${isMine ? 'myMessageText' : 'userMessageText'}`;
  const image = `assets/conversations/${imgSrc}.png`;
  return (
    <section className={messageStyle}>
      <figure className="userImg">
        <WrappedImage src={image}/>
        <span className="messageTimeLabel">{time}</span>
      </figure>
      <p className={messageTextStyles}>{text}</p>
    </section>
  );
};
Message.propTypes = {
  text: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
  isMine: React.PropTypes.bool,
};

export default class ChatBoard extends React.PureComponent {
  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    const {selectedConversation} = this.props;
    this.props.fetchMessages(selectedConversation);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedConversation !== this.props.selectedConversation) {
      const {selectedConversation} = nextProps;
      this.props.fetchMessages(selectedConversation);
    }
  }

  render() {
    return (
      <section className="chatBoardContainer">
        <ChatBoardHeader title="Kirsten Mckellar"/>
        <section className="messageBoard" ref={e => this.messageList = e}>
          {
            this.props.messages.map((message, index) => {
              const isMine = this.props.stubUser.imgSrc === (message.imgSrc || this.props.stubUser.imgSrc);
              return <Message
                key={index}
                text={message.text}
                imgSrc={message.imgSrc}
                time={Utils.getTime(new Date(message.time))}
                isMine={isMine}
              />;
            })
          }
        </section>
        <InputField {...this.props}/>
      </section>
    );
  }
}