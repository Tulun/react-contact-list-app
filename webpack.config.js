var path = require('path');
var webpack = require('webpack');
 
module.exports = {

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/main.js'
  ],
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader?limit=100000' }

      // {
      //   test: /\.html$/,
      //   loader: "file?name=[name].[ext]",
      // }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};