'use strict';

import React from 'react';
import LeftSide from '../container/left-side/LeftSide';
import Conversations from '../container/conversation-panel/Conversations';
import ChatBoard from '../container/chat-board/Board';
// import UserInfo from './user-info/UserInfo';
import '../entry/normalize.css';

const Root = () => {
  return (
    <section className="mainContainer">
      <LeftSide/>
      <Conversations/>
      <ChatBoard/>
      {/*<UserInfo/>*/}
    </section>
  );
};

export default Root;