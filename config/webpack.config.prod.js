const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const paths = require('./paths');
const rules = require('./webpack.rules');
const getClientEnvironment = require('./env');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}
const config = {
  mode: 'production',
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  module: {
    strictExportPresence: true,
    rules,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
  ],
  performance: {
    hints: false,
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
};

const client = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: paths.appBuild,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: '/static/js/',
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (
          message.indexOf('Total precache size is') === 0 ||
          message.indexOf('Skipping static resource') === 0
        ) {
          return;
        }
        console.log(message);
      },
      navigateFallback: `${publicUrl}/`,
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: shouldUseSourceMap,
        uglifyOptions: {
          compress: {
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
        }
      }),
    ],
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
    },
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
});

const server = Object.assign({}, config, {
  entry: './server/index.js',
  output: {
    publicPath: '/static/js',
    filename: 'server.js',
    path: paths.appBuild,
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  externals: [
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

module.exports = [client, server];
