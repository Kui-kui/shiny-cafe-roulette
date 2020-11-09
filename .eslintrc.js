module.exports = {
  extends: ['airbnb-base', 'prettier', 'react-app', 'react-app/jest'],
  plugins: [
    'jest',
    'react',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/sort-comp': 0,
    'simple-import-sort/sort': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false }],
  },
};
