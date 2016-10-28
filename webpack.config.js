const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/Dashboard.jsx',
  output: {
    path: __dirname,
    filename: 'webpack-bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/index.html'),
      appMountId: 'content',
      title: 'Hello',
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /node_modules/,
        include: __dirname,
      },
      {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: [
           'file?hash=sha512&digest=hex&name=[hash].[ext]',
           'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
      },
    ],
  }
};
