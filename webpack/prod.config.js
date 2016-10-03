const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
  devtool: 'source-map',


  output: {
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.(scss|sass)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css?localIdentName=[path][name]--[local]!postcss-loader!sass')
    },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __DEVELOPMENT__: false
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true
    })
  ]
};
