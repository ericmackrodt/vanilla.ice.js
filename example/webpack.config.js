const path = require('path');

module.exports = {
  entry: ['./index'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          'awesome-typescript-loader',
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg?$/,
        loaders: 'url-loader?limit=10000',
      },
    ],
  },
};