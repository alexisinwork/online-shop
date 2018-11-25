module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        indent: 0,
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'prettier/prettier': 'error'
    },
};
