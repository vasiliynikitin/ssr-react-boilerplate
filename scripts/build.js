process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';

process.on('unhandledRejection', err => {
  console.log('ERROR!\n', err);
});

require('../config/env');

const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const paths = require('../config/paths');

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
  });
}

function build() {
  console.log('Creating an optimized production build...');

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = stats.toJson({});
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log('\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n');
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        warnings: messages.warnings,
      });
    });
  });
}

fs.emptyDirSync(paths.appBuild);
copyPublicFolder();
build()
  .then(({ stats, warnings }) => {
    if (warnings.length) {
      console.log('Compiled with warnings.\n');
      console.log(warnings.join('\n\n'));
      console.log('\nSearch for the "keywords" to learn more about each warning.');
      console.log('To ignore, add // eslint-disable-next-line to the line before.\n');
    } else {
      console.log('stats:');
      console.log(stats);
      console.log('Compiled successfully.\n');
    }

    console.log();
  })
  .catch(err => {
    console.log('Failed to compile.\n');
    console.log(err);
    process.exit(1);
  });
  

