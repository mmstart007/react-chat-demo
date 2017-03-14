'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach */
import React from 'react';
import {shallow} from 'enzyme';
import ChatBoardInput from './InputField';
// import ChatBoardModal from '../chat-board-modal/ChatBoardModal';
//noinspection JSUnresolvedFunction
jest.unmock('./InputField');

describe('ChatBoardInputField', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ChatBoardInput/>);
  });

  it('wraps content with .inputFieldContainer class', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.inputFieldContainer').length).toEqual(1);
  });

  it('wraps content with .messageField class', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.messageField').length).toEqual(1);
  });

  it('wraps 2 buttons send and attach', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.chatButtonAttach').length).toEqual(1);
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.chatButtonSend').length).toEqual(1);
  });

//  TODO: setState 140+ and it should change class
});