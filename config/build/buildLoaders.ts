import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(
    options: BuildOptions
): Array<webpack.RuleSetRule> {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName: options.isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };
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
