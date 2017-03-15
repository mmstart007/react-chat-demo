'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach */
import React from 'react';
import {shallow, mount} from 'enzyme';
import ChatBoardModal from './ChatBoardModal';
// import ChatBoardModal from '../chat-board-modal/ChatBoardModal';
//noinspection JSUnresolvedFunction
jest.unmock('./ChatBoardModal');

describe('ChatBoardInputField', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ChatBoardModal onClose={() => 'mocked'}/>);
  });

  it('wraps content with .modal class', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.modal').length).toEqual(1);
  });

  it('wraps .modal-content content', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.modal-content').length).toEqual(1);
  });

  it('wraps close button with close class', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('.close').length).toEqual(1);
  });

  it('wraps attachments', () => {
    //noinspection JSUnresolvedFunction
    expect(wrapper.find('Attachments').length).toEqual(1);
  });

  it('onClose should return "mocked"', () => {
    const mounted = mount(<ChatBoardModal onClose={() => 'mocked'}/>);
    //noinspection JSUnresolvedFunction
    expect(mounted.props().onClose()).toEqual('mocked');
  });
});