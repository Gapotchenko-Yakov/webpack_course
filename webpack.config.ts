import path from "path";
import webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  platform?: BuildPlatform;
  analyser?: Boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    paths: paths,
    platform: env.platform ?? "desktop",
    analyser: env.analyser ?? false,
  });

  return config;
};
