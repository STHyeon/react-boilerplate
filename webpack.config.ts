const dotenvConfig = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenvConfig.config();

//
//
//

const isProd = process.env.NODE_ENV === 'production';

//
//
//

module.exports = {
  entry: './src/index.tsx',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(webp|png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      hash: true,
    }),
  ],
};
