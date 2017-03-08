'use strict';

import React from 'react';
import LeftSide from './left-side/LeftSide';
import ConversationPanel from './conversation-panel/ConversationPanel';
import ChatBoard from '../container/chat-board/Board';
import UserInfo from './user-info/UserInfo';
import '../entry/normalize.css';

const Root = () => {
  return (
    <section className="mainContainer">
      <LeftSide/>
      <ConversationPanel/>
      <ChatBoard/>
      <UserInfo/>
    </section>
  );
};

export default Root;