'use strict';
/* global module */
/* global require */

const commonConfig = require('./base.js');

module.exports = (env) => {
  const hotReplacementEntries = [
    require.resolve('webpack-dev-server/client') + '?http://localhost:5001',
    require.resolve('webpack/hot/only-dev-server')
  ];
  return {
    devtool: 'eval',
    entry: commonConfig().entry.concat(hotReplacementEntries),
    output: commonConfig().output,
    module: commonConfig().module,
    plugins: commonConfig().plugins,
    resolve: commonConfig().resolve,
    devServer: {
      port: 5001,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      headers: {'X-Custom-Header': 'yes'},
      quiet: false,
      compress: true,
      hot: true,
      stats: {colors: true},
      open: false,
      inline: false
    }
  };
};