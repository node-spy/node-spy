const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname + '/server',
  entry: './server.js',
  output: { path: __dirname + '../dist', filename: 'bundle.js'},
  module: {
    
  }
  watch: true,
}