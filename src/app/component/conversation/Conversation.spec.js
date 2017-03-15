'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach*/
import React from 'react';
import {shallow} from 'enzyme';
import Conversation from './Conversation';
// import ChatBoardModal from '../chat-board-modal/ChatBoardModal';
//noinspection JSUnresolvedFunction
jest.unmock('./Conversation');

describe('ChatBoardInputField', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Conversation
        id={1}
        pinned={true}
        imgSrc={'testImg'}
        text={'testText'}
        time={1234567890}
        title={'testTitle'}
        isSelected={true}
      />
    );
  });
  it('should have .pinned class if pinned is true', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.pinned').length).toEqual(1);
  });

  it('should have .selected class if isSelected is true', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.selected').length).toEqual(1);
  });

  it('should not have .selected class if isSelected is false', () => {
    wrapper = shallow(
      <Conversation
        id={1}
        pinned={true}
        imgSrc={'testImg'}
        text={'testText'}
        time={1234567890}
        title={'testTitle'}
        isSelected={false}
      />
    );
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.selected').length).toEqual(0);
  });

  it('should not have .pinned class if pinned is false', () => {
    const wrapper = shallow(
      <Conversation
        id={1}
        pinned={false}
        imgSrc="testImg"
        text="testText"
        time={1234567890}
        title="testTitle"
        isSelected={true}
      />
    );
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.pinned').length).toEqual(0);
  });

  it('should contain MoreButton', () => {
    // noinspection JSUnresolvedFunction
    expect(wrapper.find('MoreButton').length).toEqual(1);
  });
});