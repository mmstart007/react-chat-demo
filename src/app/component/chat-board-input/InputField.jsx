'use strict';

import React from 'react';
import './styles.css';

export default class InputField extends React.PureComponent {
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
      const message = {time: new Date().getTime(), text: textContent.replace(/\n+/g, '\n'), imgSrc: this.props.stubUser.imgSrc};
      const conversation = this.props.selectedConversation;
      this.props.sendMessage(message, conversation);
      this.input.value = '';
      this.setState({countChars: 140});
    }
  }

  render() {
    return (
      <form className="inputFieldContainer">
        <span className="chatButtonAttach"/>
        <textarea
          ref={input => {
            this.input = input;
          }}
          value={this.input.value}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && e.shiftKey == false) {
              this.handleSubmit(e);
            }
          }}
          onKeyUp={(e) => {
            const target = e.target;
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
          }}
          className="messageField"
          onChange={(e) => {
            const countChars = 140 - e.target.value.length;
            this.setState({
              countChars: countChars
            });
            if (countChars <= 0) {
              {/*console.log('TODO: add validation');*/
              }
            } else {
              {/*console.log('add validation');*/
              }
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
