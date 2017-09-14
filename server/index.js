
const express = require('express');
const log = require('logem');

const argv = require('minimist')(process.argv.slice(2));
const setupMiddlewares = require('./setupMiddlewares');
const logServerStarted = require('./logServerStarted');

const resolve = require('path').resolve;
const app = express();

// In production we need to pass these values in instead of relying on webpack
setupMiddlewares(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    log.error(err.message);
  }
  logServerStarted(port, host);
});
