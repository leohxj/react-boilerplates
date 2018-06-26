/**
 * @file base 配置
 * @description 详细说明
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Tue, 2018-06-26 15:43:25
 *
 * Last Modified: Tue, 2018-06-26 23:47:11
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */

import StylelintPlugin from 'stylelint-webpack-plugin';
import FlowWebpackPlugin from 'flow-webpack-plugin';

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
    new FlowWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};
