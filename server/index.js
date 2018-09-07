/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, global-require */
import path from 'path';
import express from 'express';
import router from './router';

const app = express();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const isDev = process.env.NODE_ENV === 'development';

process.on('unhandledRejection', err => {
  console.log('ERROR!\n', err);
});

['SIGINT', 'SIGTERM'].forEach(sig => {
  process.on(sig, () => {
    // devServer.close();
    process.exit();
  });
});

let bundles;

if (isDev) {
  const webpackConfig = require('../config/webpack.config.dev').client;
  const bundlePath = webpackConfig.output.publicPath;
  const devBundles = [
    'app.js',
    'vendors.app.js',
    'devtools.js',
  ];
  bundles = devBundles.map(name => `${bundlePath}${name}`);
  const middleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const compiler = webpack(webpackConfig);

  app.use(middleware(compiler, {
    noInfo: true,
    publicPath: bundlePath
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use('/', express.static(path.join(__dirname, 'static')));
  app.use('/static', express.static(path.join(__dirname, 'static')));
} else {
  // const assets = require('./webpack-assets.json');
  // bundles = Object.keys(assets).map(name => assets[name]);
  bundles = [];
}

function setRouter() {
  app.use('/', router(bundles));
}

setRouter();

/* eslint-disable no-console */
app.listen(PORT, () => console.log('Example app listening on port 3000!'));

/* eslint-disable no-underscore-dangle */
if (module.hot) {
  module.hot.accept('./router', () => {
    if (app._router) {
      app._router.stack.pop();
      setRouter();
    }
  });
}
