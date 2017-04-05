const path = require('path');

module.exports = {

  entry: path.resolve('client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },

      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}