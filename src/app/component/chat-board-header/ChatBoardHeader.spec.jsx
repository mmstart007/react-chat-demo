'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach */
import React from 'react';
import {shallow} from 'enzyme';
import ChatBoardHeader from './ChatBoardHeader';
// import ChatBoardModal from '../chat-board-modal/ChatBoardModal';
//noinspection JSUnresolvedFunction
jest.unmock('./ChatBoardHeader');

describe('ChatBoardHeader', () => {
  let wrapper;
  let chatBoardHeader;
  let chatButtonsSection;
  beforeEach(() => {
    wrapper = shallow(<ChatBoardHeader/>);
    chatBoardHeader = wrapper.find('.chatBoardHeader');
    chatButtonsSection = wrapper.find('.chatButtonsSection');
  });

  it('wraps content with .chatBoardContainer class', () => {
    //noinspection JSUnresolvedFunction
    expect(chatBoardHeader.length).toEqual(1);
    //noinspection JSUnresolvedFunction
    expect(chatBoardHeader.find('.chatButtonsSection').length).toEqual(1);
  });

  it('wrap 4 chatButtons and first ', () => {
    const chatButtons = chatButtonsSection.find('.chatButton');
    //noinspection JSUnresolvedFunction
    expect(chatButtons.length).toEqual(4);
    //noinspection JSUnresolvedFunction
    expect(chatButtons.first().node.props.href).toEqual('/attachments/photo');
  });

  it('if showAttachmentModal is true it should render ChatBoardModal', () => {
    wrapper.setState({showAttachmentModal: false});
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('ChatBoardModal').length).toEqual(0);
    wrapper.setState({showAttachmentModal: true});
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('ChatBoardModal').length).toEqual(1);
  });
});