/* eslint-disable @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT_NAME = process.env.npm_package_name;
const DEV_SERVER_PORT = 3000;

module.exports = (env) => {
  const isLocal = env.local;

  const config = {
    mode: isLocal ? 'development' : 'production',
    devtool: isLocal ? 'inline-source-map' : false,
    entry: {
      [PROJECT_NAME]: 'App.tsx',
    },
    output: {
      // output bundled entry
      filename: 'feedbacky.js',
      chunkFilename: `${PROJECT_NAME}.[name].[${
        isLocal ? 'hash' : 'contenthash'
      }].js`,
      path: path.resolve('dist'),
      publicPath: isLocal ? '/' : './',
      library: {
        name: 'feedbacky',
        type: 'umd',
      },
    },
    module: {
      rules: [
        {
          test: /\.(ttf)$/,
          type: 'asset/resource', //  'asset/resource', 'asset/inline', 'asset', 'asset/source' for asset modules, and other types for other rules.
        },
        {
          test: /\.(jpe?g|png|gif|svg|ttf|otf|eot|woff(2)?)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(scss)$/,
          exclude: /\.module\.(scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isLocal,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isLocal,
              },
            },
          ],
        },
        {
          test: /\.module\.(scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isLocal,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isLocal,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      ...(isLocal
        ? [
            new HtmlWebpackPlugin({
              template: 'index.ejs',
              filename: 'index.html',
              inject: 'body',
            }),
          ]
        : []),
    ],
    resolve: {
      modules: [
        'node_modules',
        path.resolve('assets'),
        path.resolve('config'),
        path.resolve('src'),
        path.resolve('tests'),
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    },
    devServer: {
      port: DEV_SERVER_PORT,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };

  return config;
};
