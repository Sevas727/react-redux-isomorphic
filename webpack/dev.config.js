const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  output: {
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader:'style!css?modules'
      },
      {
      test: /\.(scss|sass)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css?localIdentName=[path][name]--[local]!postcss-loader!sass')
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
      __DEVELOPMENT__: true
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new NpmInstallPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true
    })
  ],
};
