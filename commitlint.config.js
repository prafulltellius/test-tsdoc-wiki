module.exports = {
    extends: [
        '@commitlint/config-conventional',
        '@commitlint/config-lerna-scopes'
    ],
    rules: {
        'subject-case': [1, 'always', ['sentence-case']]
    }
};
