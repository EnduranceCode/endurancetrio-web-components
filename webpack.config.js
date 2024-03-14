const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const envPath = path.resolve(__dirname, `.env.${ENVIRONMENT}`);
const env = dotenv.config({ path: envPath }).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'app', 'RaceResults.js') },

  output: {
    clean: true,
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader', options: { sourceMap: true } }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.DefinePlugin(envKeys),
  ],

  devServer: {
    open: true,
  },
};
