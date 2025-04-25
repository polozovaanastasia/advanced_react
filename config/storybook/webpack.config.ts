import path from "path";
import webpack from "webpack";
import { getCssLoader } from "../build/loaders/getCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.resolve?.modules?.push(paths.src);
    config.module?.rules?.push(getCssLoader(true));

    return config;
};
