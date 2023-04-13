import {BuildOptions} from "./type/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import webpack from "webpack";

export const buildWebpackConfig = ({mode, paths, isDev}: BuildOptions): webpack.Configuration => {
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins({mode, paths, isDev}),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}
