/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ['src/index.ts'],
    out: 'docs',
    plugin: ['typedoc-plugin-markdown', 'typedoc-github-wiki-theme']
};
