const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [path.join(__dirname, 'Index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'App/Index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['latest', { es2015: false }], 'react'],
              plugins: [
                'transform-class-properties',
                'transform-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  devtool: 'source-map',
};
