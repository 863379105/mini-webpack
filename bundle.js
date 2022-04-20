const Webpack = require('./lib/webpack.js');
const config = require('./webpack.config');

const webpack = new Webpack(config);

webpack.run();