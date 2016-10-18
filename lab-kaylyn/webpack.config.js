'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//tell which js file that webpack should use for entry point to app
module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build', //every we time we run webpack it will create a build dir
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`, //tell plugin which HTML template to use, "instead of using default template use mine"
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/, //each obj is going to config loader chain for regex
        loader: ExtractTextPlugin.extract('style', 'css!sass!'),
      },
    ],
  },
};
