const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        // Also generate a test.html
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],
  };
};
