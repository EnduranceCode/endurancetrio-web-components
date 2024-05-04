const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENVIRONMENT = process.argv[process.argv.indexOf('--mode') + 1] || 'development';
const envPath = path.resolve(__dirname, `.env.${ENVIRONMENT}`);
const env = dotenv.config({ path: envPath }).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

console.info('Environment Variables', envKeys);

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'app', 'index.js') },

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
