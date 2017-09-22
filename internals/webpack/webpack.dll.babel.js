/**
 * WEBPACK DLL GENERATOR
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

const { resolve, join } = require('path');
const webpack = require('webpack');

const pullAll = require('lodash/pullAll');
const keys = require('lodash/keys');

const pkg = require(join(process.cwd(), 'package.json'));
const config = require('../config.json');

const outputPath = resolve(config.dllOutputPath);

module.exports = require('./webpack.base.babel')({
  context: process.cwd(),
  entry: pullAll(keys(pkg.dependencies), config.exclude),
  devtool: 'eval',
  output: {
    filename: '[name].dll.js',
    path: outputPath,
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: join(outputPath, '[name].json'),
    }),
  ],
  performance: {
    hints: false,
  },
});
