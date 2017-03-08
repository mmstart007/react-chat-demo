'use strict';
/* global module */
/* global require */

const postcss = require('postcss-import');
const postcssNext = require('postcss-cssnext');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  processors: [
    postcss(),
    postcssNext({
      browsers: ['last 2 versions', '> 5%']
    }),
  ],
  plugins: [
    precss,
    autoprefixer
  ]
};