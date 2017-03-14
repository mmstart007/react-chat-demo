'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach */
import React from 'react';
import {shallow} from 'enzyme';
import ChatBoard from './ChatBoard';
//noinspection JSUnresolvedFunction
jest.unmock('./ChatBoard');

describe('ChatBoard', () => {
  let wrapper;
  let chatBoard;
  beforeEach(() => {
    wrapper = shallow(<ChatBoard messages={[]}/>);
    chatBoard = wrapper.find('.chatBoardContainer');
  });

  it('wraps content with .chatBoardContainer class', () => {
    //noinspection JSUnresolvedFunction
    expect(chatBoard.length).toEqual(1);
    //noinspection JSUnresolvedFunction
    expect(chatBoard.find('ChatBoardHeader').length).toEqual(1);
  });

  it('wraps messageBoard', () => {
    const messageBoard = wrapper.find('.messageBoard');
    //noinspection JSUnresolvedFunction
    expect(messageBoard.length).toEqual(1);
  });

  it('wraps InputField', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('InputField').length).toEqual(1);
  });
});