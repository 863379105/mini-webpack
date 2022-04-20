
const path = require('path');

module.exports = {
  // entry: {
  //   index: './src/index.js',
  // },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  mode: 'development',
  plugins: [],
  module: {}
}