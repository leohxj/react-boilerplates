import opn from 'opn';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

import baseConfig from './webpack.config.base.babel';

const developmentConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    after(app) {
      console.log(`
Start successfully.
Now opening app in browser ...
Your can also visit the url:
http://localhost:8080/index.html
`);
      opn('http://localhost:8080/index.html', {
        app: 'google chrome'
      });
    },
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
    port: 8080, // Defaults to 8080
    // overlay: true is equivalent
    overlay: {
      errors: true,
      warnings: false
    },
    disableHostCheck: true,
    // 配合 FriendlyErrorsWebpackPlugin, 只展示 Friendly 处理后的
    quiet: true

    // publicPath 设置的话， 是使得 bundle 的文件，在此路径下访问
    // publicPath: '/assets/',
    // proxy: {
    //   '/api': {
    //     target: 'http://leo.wapa.taobao.com:8080',
    //     pathRewrite: { '^/api': '' }
    //   }
    // }
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // exclude 是为了处理自己代码中的 less
      {
        test: /\.less?$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: true,
              localIdentName: '[path][name]__[local]'
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } }
        ]
      },
      // 不通过 css module 处理 antd 之类的 less 文件
      {
        test: /\.less$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Application Boilerplate',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    })
  ]
});

export default developmentConfig;
