'use strict';
/* global require */
const matt = require('../../../assets/conversations/matt.png');
const claire = require('../../../assets/conversations/claire.png');
const kayne = require('../../../assets/conversations/kayne.png');
const kirsten = require('../../../assets/conversations/kirsten.png');
const mace = require('../../../assets/conversations/mace.png');
const shaun = require('../../../assets/conversations/shaun.png');

const conversations = [
  {
    title: 'Matt Thompson',
    text: 'Thanks again you have been la-la-la',
    imgSrc: matt,
    time: '5 min',
  },
  {
    title: 'Clarie Sharwood',
    text: 'My selfie game is lacking can la-la-la',
    imgSrc: claire,
    time: '10 min',
  },
  {
    title: 'Kirsten Mckellar',
    text: 'Where is the nearest place to la-la-la',
    imgSrc: kirsten,
    time: '2 min',
  },
  {
    title: 'Shaun Gardner',
    text: 'Ok that sounds perfect',
    imgSrc: shaun,
    time: '30 min',
  },
  {
    title: 'Mace Windu',
    text: 'Project the senator at all costs',
    imgSrc: mace,
    time: '38 min',
  },
  {
    title: 'Kayne West',
    text: 'So tell the voice inside your la-la-la',
    imgSrc: kayne,
    time: '49 min',
  },
];

export default conversations;