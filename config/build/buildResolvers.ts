import path from "path";
import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            src: path.resolve(__dirname, "..", "..", "src"),
            "@components": path.resolve(
                __dirname,
                "..",
                "..",
                "src",
                "components"
            ),
            "@pages": path.resolve(__dirname, "..", "..", "src", "pages"),
        },
    };
}
