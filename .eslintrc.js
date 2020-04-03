module.exports = {
  root: true,
  env: {
    mocha: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    jest: true,
    expect: false,
  },
  plugins: ['jest', 'prettier'],
  rules: {
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': 2,
    'react/require-default-props': 0,
    'react/sort-prop-types': 2,
    'sort-keys': 2,
  },
}
