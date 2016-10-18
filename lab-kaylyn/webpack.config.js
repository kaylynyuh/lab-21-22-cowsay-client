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
        test: /\.js$/,
        exclude: /node_modules/, //all js files that are not in node_modules
        loader: 'babel',
      },
      {
        test: /\.scss$/, //each obj is going to config loader chain for regex
        loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap'),
      },
      {
        test: /\.(eot|woff|ttf|svg).*/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]',
        //use url loader and configure it with a url query string, if the file is less than 10000 bytes, base64 encode and it put it in a bundle other wise put it in a fonts dir
      },
    ],
  },
};
