import webpack from "webpack";
import { getCssLoader } from "./loaders/getCssLoader";
import { getSvgLoader } from "./loaders/getSvgLoader";
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
    const svgLoader = getSvgLoader();

    const videoLoader = {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
    };

    return [typescriptLoader, cssLoader, svgLoader, videoLoader];
}
