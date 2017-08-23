/**
 * This file used by node.js
 * So, using CommonJS to write code
 */
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// 拼接目录路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

const commonConfig = {
  entry: {
    bundle: resolve('src') // same as resolve('src/index.js');
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: 'customLib',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};

const developmentConfig = {
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. Good for complex setups.
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    // overlay: true is equivalent
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ]
};

const productionConfig = {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader'
    }, {
      test: /\.pcss$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
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
};

const getConfigs = config => merge(commonConfig, config);

module.exports = (env) => {
  if (env === 'production') {
    return getConfigs(productionConfig);
  }
  return getConfigs(developmentConfig);
};
