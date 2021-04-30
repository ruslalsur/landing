const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')

const isDevMode = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),

  mode: 'development',

  entry: {
    main: ['@babel/polyfill', './index.js'],
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.s?c?a?ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(webp|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: !isDevMode,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src', 'assets', 'images'),
          to: path.join(__dirname, 'build', 'images'),
        },
      ],
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: !isDevMode,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
      new JsonMinimizerPlugin(),
    ],
  },

  devtool: 'eval-source-map',

  devServer: {
    port: 3000,
    hot: isDevMode,
    historyApiFallback: true,
  },
}
