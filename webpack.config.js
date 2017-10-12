const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

console.log('webpack start');
console.log(ROOT_PATH);
console.log(APP_PATH);
console.log(BUILD_PATH);
module.exports = {
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: 'src'
  },
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_PATH,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}
