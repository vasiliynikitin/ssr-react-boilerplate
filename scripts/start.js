/* eslint-env node */
/* eslint-disable no-console */
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.APP_ENV = 'development';

const CYAN = '\x1b[36m%s\x1b[0m';

const webpack = require('webpack');
const fs = require('fs-extra');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev').server;

const compiler = webpack(config);

let serverLoaded = false;
fs.emptyDirSync(paths.appDist);

console.log(CYAN, 'Building server bundle...');
compiler.watch({
  aggregateTimeout: 300,
  poll: 1000,
}, (err, stats) => {
  new Promise((resolve, reject) => {
    if (err) {
      return reject(err);
    }
    const messages = stats.toJson({});
    if (messages.errors.length) {
      if (messages.errors.length > 1) {
        messages.errors.length = 1;
      }
      return reject(new Error(messages.errors.join('\n\n')));
    }
    console.log(CYAN, 'Server bundle built');
    if (messages.warnings.length) {
      console.log(CYAN, 'Compiled with warnings.\n');
      console.log(messages.warnings.join('\n\n'));
    }
    resolve();
  })
    .then(() => {
      if (!serverLoaded) {
        serverLoaded = true;
        console.log(CYAN, 'Loading server bundle...');
        require(`${paths.appDist}/server.js`); // eslint-disable-line
        console.log(CYAN, 'Server bundle loaded');
      }
      console.log(CYAN, `[Built in ${stats.endTime - stats.startTime}ms]`);
    })
    .catch((e) => {
      console.log(e);
      if (!serverLoaded) {
        process.exit(1);
      }
    });
});