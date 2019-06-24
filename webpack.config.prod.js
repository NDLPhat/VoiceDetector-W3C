const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    "speech_to_text.min": "./index.js"
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
    libraryTarget: "umd" // make the bundle export
  },
  devtool: "",
  module: {
    rules: [{ loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](jquery)[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // }),
    new HtmlWebpackPlugin({
      title: "Production",
      template: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "production"
    })
  ]
};
module.exports = config;
