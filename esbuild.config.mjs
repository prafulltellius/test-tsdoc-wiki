import * as esbuild from 'esbuild';

const configureEsBuild = (overrides) => {
    return esbuild.build({
        entryPoints: ['src/index.ts'], // Entry point of your library
        bundle: true, // Bundle all dependencies into a single output file
        outdir: 'dist', // Output file for the bundled library
        legalComments: 'none', //check for production
        lineLimit: 80,
        packages: 'external',
        format: 'esm', // Output format (ES module)
        minify: process.env.NODE_ENV === 'production', // Minify the output
        define: {
            'process.env.NODE_ENV':
                process.env.NODE_ENV === 'production'
                    ? `"production"`
                    : `"development"` // Define NODE_ENV as "production"
        },
        loader: {
            '.tsx': 'tsx', // Handle TypeScript and TypeScript React files
            '.ts': 'ts', // Handle TypeScript files
            '.js': 'js' // Handle JavaScript files
        },
        jsxFactory: 'React.createElement', // JSX factory function
        jsxFragment: 'React.Fragment', // JSX fragment
        target: 'es6', // Target ECMAScript version
        platform: 'browser', // Target browser environment
        tsconfig: 'tsconfig.json', // Path to your TypeScript config file,
        color: true,
        logLevel: 'verbose',
        treeShaking: true,
        plugins: [...(overrides?.plugins || [])],
        ...overrides
    });
};

export default configureEsBuild;
