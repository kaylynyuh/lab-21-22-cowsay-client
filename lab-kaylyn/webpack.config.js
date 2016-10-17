'use strict';

const HTMLplugin = require('html-webpack-plugin');

//tell which js file that webpack should use for entry point to app
module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build', //every we time we run webpack it will create a build dir
  },
  plugins: [
    new HTMLplugin({
      template: `${__dirname}/app/index.html`, //tell plugin which HTML template to use, "instead of using default template use mine"
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/, //each obj is going to config loader chain for regex
        loader: 'style!css!sass!',
      },
    ],
  },
};
