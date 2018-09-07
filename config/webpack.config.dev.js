const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const ReactJssHmrPlugin = require('react-jss-hmr/webpack');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const rules = require('./webpack.rules');

const publicUrl = '';
const env = getClientEnvironment(publicUrl);
const config = {
  devtool: 'source-map',
  mode: 'development',
  module: {
    strictExportPresence: true,
    rules,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  resolve: {
    plugins: [
      new ReactJssHmrPlugin(),
    ],
  },
  performance: {
    hints: false,
  },
};

const client = Object.assign({}, config, {
  entry: {
    app: [
      'webpack-hot-middleware/client?name=app',
      './src/index.js',
    ],
    devtools: 'redux-devtools-extension',
  },
  output: {
    pathinfo: true,
    chunkFilename: '[name].js',
    publicPath: '/static/js/',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '.',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
      }
    }
  }
});

const server = Object.assign({}, config, {
  entry: [
    'webpack/hot/poll?1000',
    './server/index.js',
  ],
  output: {
    publicPath: '/static/js',
    filename: 'server.js',
    path: paths.appDist,
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    }),
    (context, request, callback) => {
      if ([
        'webpack-assets.json',
      ]
        .map(key => request.indexOf(key) !== -1)
        .filter(Boolean)
        .length
      ) {
        callback(null, `commonjs ${request}`);
      } else {
        callback();
      }
    }
  ],
});

module.exports = { client, server };
