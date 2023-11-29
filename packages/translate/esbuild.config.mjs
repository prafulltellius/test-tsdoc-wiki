import configureEsBuild from '../../esbuild.config.mjs';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const esBuildConfig = {
    plugins: [
        nodeExternalsPlugin({
            packagePath: ['../../package.json', './package.json'],
            devDependencies: true
        })
    ]
};

configureEsBuild(esBuildConfig).catch(() => process.exit(1));
