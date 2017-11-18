const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './source/js/ribs-checkbox.js',
  output: {
    filename: 'dist/js/ribs-checkbox.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'assets/'),
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
  ]
};