import merge from 'webpack-merge';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { resolve } from './utils';
import baseConfig from './webpack.config.base.babel';

const productionConfig = merge(baseConfig, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.pcss$/,
        exclude: resolve('node_modules'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve('')
    }),
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    // https://webpack.js.org/guides/migrating/#uglifyjsplugin-minimize-loaders
    new ExtractTextPlugin('[name].css'),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    })
  ]
});

export default productionConfig;
