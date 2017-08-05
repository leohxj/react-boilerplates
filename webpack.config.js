const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'customLib',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: "babel-loader"
    }, {
      test: /\.pcss$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
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
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
