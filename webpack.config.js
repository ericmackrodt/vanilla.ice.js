const path = require('path');

module.exports = {
  entry: ['./src/index'],
  externals: {
    'react': 'react',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    // will be available as "window.TSButton" in a non-module environment
    library: 'TSButton',
    libraryTarget: 'umd',
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
        test: /\.(svg|gif)?$/,
        loaders: 'url-loader?limit=10000',
      },
    ],
  },
};