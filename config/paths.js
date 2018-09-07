const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appDist: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: '',
};
