'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach */
import React from 'react';
import {shallow, mount} from 'enzyme';
import ConversationPanel from './ConversationPanel';
// import ChatBoardModal from '../chat-board-modal/ChatBoardModal';
//noinspection JSUnresolvedFunction
jest.unmock('./ConversationPanel');

describe('ConversationPanel', () => {
  let wrapper;
  let mounter;
  beforeEach(() => {
    wrapper = shallow(<ConversationPanel showConversationList={true} conversations={[]}/>);
    mounter = mount(<ConversationPanel showConversationList={true} conversations={[]}/>);
  });

  it('wraps conversationPanelContainer', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.conversationPanelContainer').length).toEqual(1);
  });

  it('wraps ConversationSearch component', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('ConversationSearch')).toBeDefined();
  });

  it('conversations is empty and showConversationList is true', () => {
    //noinspection JSUnresolvedFunction
    expect(mounter.props().conversations.length).toEqual(0);
    //noinspection JSUnresolvedFunction
    expect(mounter.props().showConversationList).toBeTruthy();
  });
});