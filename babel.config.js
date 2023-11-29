//TODO:- Add dev environment specific config, babel-plugin-styled-components is available for styled components
module.exports = (api) => {
    api.cache(true);

    const presets = [
        '@babel/preset-env',

        [
            '@babel/preset-react',
            {
                runtime: 'automatic'
            }
        ],
        '@babel/preset-typescript'
    ];

    const plugins = ['@babel/plugin-transform-typescript'];

    return {
        presets,
        plugins
    };
};
