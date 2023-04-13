import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {BuildPaths} from "./config/build/type/config";

const mode = 'development';
const isDev = mode === 'development';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const config = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
})

export default config;
