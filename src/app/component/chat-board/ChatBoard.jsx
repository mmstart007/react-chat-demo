'use strict';
/* global require */
import React from 'react';
import LoaderWrapper from '../loader/ComponentWrapper';
import './styles.css';
import './chat-board-section.css';
const matt = require('../../../assets/conversations/matt.png');

const ChatBoardHeader = ({title}) => (
  <header className="chatBoardHeader">
    <span className="messageStatus"><strong>{title}</strong> is typing...</span>
    <section className="chatButtonsSection">
      <span className="chatButton attachmentsButton"/>
      <span className="chatButton favouriteButton"/>
      <span className="chatButton callButton"/>
      <span className="chatButton videoCallButton"/>
    </section>
  </header>
);
ChatBoardHeader.propTypes = {
  title: React.PropTypes.string,
};

const WrappedImage = LoaderWrapper(({src}) => <img src={src}/>);
const Message = ({text, time, imgSrc, isMine}) => {
  const messageStyle = `messageInConversation ${isMine ? 'myMessage' : 'userMessage'}`;
  const messageTextStyles = `messageText ${isMine ? 'myMessageText' : 'userMessageText'}`;
  return (
    <section className={messageStyle}>
      <figure className="userImg">
        <WrappedImage src={imgSrc}/>
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

class InputField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {countChars: 140};
    this.input = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const textContent = this.input.value;
    if (textContent) {
      const time = this.getCurrentTime();
      this.props.sendMessage({time: time, text: textContent.replace(/\n+/g, '\n')});
      this.input.value = '';
      this.setState({countChars: 140});
    }
  }

  getCurrentTime() {
    const date = new Date();
    const timeUnits = [date.getHours(), date.getMinutes(), date.getSeconds()];
    return timeUnits.map(this.prettyTimeUnitPrint).reduce((i, j) => `${i}:${j}`);
  }

  prettyTimeUnitPrint(unit) {
    return unit < 10 ? '0' + unit : unit;
  }

  render() {
    return (
      <form className="inputFieldContainer">
        <span className="chatButtonAttach"/>
        <textarea
          ref={input => {
            this.input = input;
            input && input.focus();
          }}
          value={this.input.value}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && e.shiftKey == false) {
              this.handleSubmit(e);
            }
          }}
          onKeyUp={() => {
            {/*const target = e.target;*/
            }
            {/*target.style.height = 'auto';*/
            }
            {/*target.style.height = target.scrollHeight + 'px';*/
            }
          }}
          className="messageField"
          onChange={(e) => {
            const countChars = 140 - e.target.value.length;
            this.setState({
              countChars: countChars
            });
            if (countChars <= 0) {
              {/*console.log('TODO: add validation');*/}
            } else {
              {/*console.log('add validation');*/}
            }
          }}
          maxLength={140}
          autoFocus={true}
        />
        <span className="chatButtonSend" onClick={this.handleSubmit}/>
      </form>
    );
  }
}


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
    /*TODO: get image from user-token*/
    /*TODO: if username === currentUsername*/
    return (
      <section className="chatBoardContainer">
        <ChatBoardHeader title="Kirsten Mckellar"/>
        <section className="messageBoard" ref={e => this.messageList = e}>
          {
            this.props.messages.map((message, index) =>
              <Message
                key={index}
                text={message.text}
                imgSrc={matt}
                time={message.time}
                isMine={index % 2 !== 0}
              />)
          }
        </section>
        <InputField sendMessage={this.props.sendMessage} messages={this.props.messages}/>
      </section>
    );
  }
}