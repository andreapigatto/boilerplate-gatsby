const jsExtensions = ['.js', '.jsx']
const tsExtensions = ['.ts', '.tsx']
const allExtensions = jsExtensions.concat(tsExtensions)

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
    // Important for solving Airbnb imports with Typescript. eslint-plugin-import don't manage it
    // https://github.com/benmosher/eslint-plugin-import/issues/1285
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    // to have jsx for Typescript extension too.
    'react/jsx-filename-extension': [1, { extensions: allExtensions }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    // Important for solving Airbnb imports with Typescript. eslint-plugin-import don't manage it
    // https://github.com/benmosher/eslint-plugin-import/issues/1615
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
