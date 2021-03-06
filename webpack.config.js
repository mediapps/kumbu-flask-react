const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

let configuration = {
  entry: {
    main: ['./client/app.js'],
  },
  output: {
    path: __dirname + '/client/static/js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/static/js/',
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader",
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../css/styles.css'
    })
  ]
}

module.exports = (env, argv) => {
  return configuration
}