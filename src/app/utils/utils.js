'use strict';

export const getTime = (date) => {
  const timeUnits = [date.getHours(), date.getMinutes(), date.getSeconds()];
  return timeUnits.map(prettyTimeUnitPrint).reduce((i, j) => `${i}:${j}`);
};

const prettyTimeUnitPrint = (unit) => {
  return unit < 10 ? '0' + unit : unit;
};