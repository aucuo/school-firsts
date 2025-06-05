module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:jsdoc/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
};