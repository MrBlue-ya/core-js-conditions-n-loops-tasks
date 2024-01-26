module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 1000,
      },
    ],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-else-return': 'off',
  },
  plugins: ['prettier'],
  ignorePatterns: ['extensions/utility.js'],
  noInlineConfig: true,
};
