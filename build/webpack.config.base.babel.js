import HtmlWebpackPlugin from 'html-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';

import { resolve } from './utils';

export default {
  entry: {
    bundle: resolve('src') // same as resolve('src/index.js');
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: resolve('node_modules'),
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: resolve('node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    }),
    new StylelintPlugin({
      files: ['**/*.?(l|p)css']
    })
  ]
};
