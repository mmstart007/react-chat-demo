'use strict';
/* global module */
/* global require */
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./base.js');

module.exports = (env) => {
  // noinspection JSUnresolvedFunction
  return webpackMerge(commonConfig(), {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  });
};