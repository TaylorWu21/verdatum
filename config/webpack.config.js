'use-strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: './app/index.js',
    users: './app/users.js',
    landing: './app/landings.js'
  },
  output: {
    path: path.join(__dirname + '/public/'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
