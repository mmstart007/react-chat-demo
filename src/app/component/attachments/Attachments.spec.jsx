'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
/* global beforeEach */

import React from 'react';
import {shallow} from 'enzyme';
//noinspection JSUnresolvedFunction
jest.unmock('./Attachments');
import Attachments from './Attachments';

describe('Attachments', () => {
  let wrapper;
  let modalContainer;
  beforeEach(() => {
    wrapper = shallow(<Attachments/>);
    modalContainer = wrapper.find('.attachmentModalContainer');
  });

  it('wraps content in a div with .attachmentModalContainer class', () => {
    //noinspection JSUnresolvedFunction
    expect(modalContainer.length).toEqual(1);
    //noinspection JSUnresolvedFunction
  });

  it('modalContainer wraps attachmentsModalHeader class', () => {
    //noinspection JSUnresolvedFunction
    expect(modalContainer.find('.attachmentsModalHeader').length).toEqual(1);
  });

  it('attachmentModalHeader contains 4 attachmentItems', () => {
    //noinspection JSUnresolvedFunction
    expect(modalContainer
      .find('.attachmentsModalHeader')
      .find('.attachmentItem').length).toEqual(4);
  });

  it('attachmentModalContainer wraps attachmentsModalContent class', () => {
    //noinspection JSUnresolvedFunction
    expect(modalContainer.find('.attachmentsModalContent').length).toEqual(1);
  });
});