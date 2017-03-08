'use strict';
/* global module */
/* global require */

const buildConfig = (env) => {
  return require(`./config/webpack.${env}.js`)({env: env});
};

module.exports = buildConfig;