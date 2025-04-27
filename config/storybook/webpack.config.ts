import path from "path";
import webpack from "webpack";
import { getCssLoader } from "../build/loaders/getCssLoader";
import { getSvgLoader } from "../build/loaders/getSvgLoader";
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
    // @ts-expect-error - мы знаем, что module не undefined
    config.module.rules = config.module?.rules?.map((rule) => {
        if (typeof rule === "string") return rule;
        if (rule && rule.test && /svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });
    config.module?.rules?.push(getSvgLoader());

    return config;
};
