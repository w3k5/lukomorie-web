import webpack from 'webpack';
import { BuildOptions } from '../types/config';
import { buildBabelLoader } from './buildBabelLoader';
import { buildCssLoader } from './buildCssLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader: webpack.RuleSetRule = buildCssLoader(options);

    const babelLoader = buildBabelLoader(options);

    return [babelLoader, typescriptLoader, cssLoader];
};
