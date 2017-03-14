'use strict';
/* global describe */
/* global it */
/* global expect */
/* global jest */
import * as Utils from './utils';

//noinspection JSUnresolvedFunction
jest.unmock('./utils');
describe('Test utils', () => {
  it('get time test', () => {
    const date = new Date();
    const hours = getPrettyFormat(date.getHours());
    const minutes = getPrettyFormat(date.getMinutes());
    const seconds = getPrettyFormat(date.getSeconds());
    // noinspection JSUnresolvedFunction
    expect(Utils.getTime(date)).toBe(`${hours}:${minutes}:${seconds}`);
  });

  function getPrettyFormat(unit) {
    return unit < 10 ? '0' + unit : unit;
  }
});