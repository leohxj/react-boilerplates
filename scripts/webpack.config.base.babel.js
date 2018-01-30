import StylelintPlugin from 'stylelint-webpack-plugin';
import FlowWebpackPlugin from 'flow-webpack-plugin';
import webpack from 'webpack';

import { resolve } from './utils';

export default {
  entry: {
    vendor: resolve('src/vendors'),
    bundle: resolve('src') // same as resolve('src/index.js');
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new StylelintPlugin({
      files: ['**/*.?(l|p)css']
    }),
    new FlowWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    })
  ]
};
