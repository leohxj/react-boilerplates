import merge from 'webpack-merge';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { resolve } from './utils';
import baseConfig from './webpack.config.base.babel';

const productionConfig = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(pcss)?$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
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
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Application Boilerplate',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
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
