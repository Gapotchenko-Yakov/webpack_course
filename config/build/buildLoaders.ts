import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const tsLoader = {
    // ts-loader из коробки умеет работать с tsx
    // если бы не он то пришлось бы настраивать babel-loader для jsx
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [sassLoader, tsLoader];
}
