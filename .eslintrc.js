//see we can explore stylelint which provides great support with styled components
module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs,ts,tsx}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project:["./tsconfig.eslint.json", "./tsconfig.json"],
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react',"prettier"],
    settings: {
        react: {
            version: 'detect'
        },
    },
    rules: {
        "prettier/prettier": ["error"],
        "no-console": "error",
        "semi": ["warn", "always"],
        "no-unused-vars": "warn",
    }
};
