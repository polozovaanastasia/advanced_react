import webpack from "webpack";
import { getCssLoader } from "./loaders/getCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(
    options: BuildOptions
): Array<webpack.RuleSetRule> {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    const cssLoader = getCssLoader(options.isDev);
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const videoLoader = {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
    };

    return [typescriptLoader, cssLoader, svgLoader, videoLoader];
}
