import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

type Mode = "production" | "development";
interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
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
      isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
