const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const localPath_dev = `/react-spa/react/`; // single spa 本地启动
const localPath_build = `/single-spa-test/react-spa/react/`; // single spa 上传 github 路径

module.exports = {
  mode: "none",
  // stats: 'verbose',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./react"),
    filename: "react-spa.js",
    publicPath: localPath_build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  devServer: {
    contentBase: "./react",
    hot: true,
    open: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial", // only package third parties that are initially dependent
        },
      },
    },
  },
};
