module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'react-app',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  'rules': {
    // コードフォーマット設定も兼ねるが、↓以外の修正はVSCode側（editor.formatOnSave）でやる
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2, { "SwitchCase": 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
    'no-multiple-empty-lines': ['error'],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
};