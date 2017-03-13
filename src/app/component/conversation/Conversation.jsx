'use strict';

import React from 'react';
import MoreButton from '../more-button/MoreButton';
import * as Utils from '../../utils/utils';
import LoaderWrapper from '../loader/ComponentWrapper';
import '../more-button/modalStyle.css';
import './styles.css';

const WrappedImage = LoaderWrapper(({src}) => <img src={src}/>);
export default class Conversation extends React.PureComponent {
  render() {
    const {id, title, text, imgSrc, time, pinned} = this.props;
    const pinnedActive = pinned ? 'pinned' : '';
    const prettyTime = Utils.getTime(new Date(time));
    return (
      <section className='conversation'>
        <section
          className="conversationMessage"
          onClick={() => {
            this.props.chooseConversation(id);
          }}
        >
          <figure className={`conversationImg ${pinnedActive}`}>
            <WrappedImage src={`assets/conversations/${imgSrc}.png`}/>
          </figure>
          <section className="message">
            <div className="messageContent">
              <span className="conversationTitle">{title}</span>
              <p className="conversationText">{text.length > 26 ? `${text.slice(0, 26)}...` : text.slice(0, 26)}</p>
            </div>
          </section>
        </section>
        <div className="messageInfo">
          <MoreButton
            id={id}
            pinned={pinned}
            deleteConversation={this.props.deleteConversation}
            pinConversation={this.props.pinConversation}
          />
          <span className="conversationTime">{prettyTime}</span>
        </div>
      </section>
    );
  }
}


Conversation.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
  time: React.PropTypes.number.isRequired,
};