module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    "plugin:prettier/recommended",
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: ['flowtype'],
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  parser: 'babel-eslint',
  rules: {
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'react/prefer-stateless-function': 'off',
    'no-param-reassign': 'off',
    'react/sort-comp': [
      1,
      {
        order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render']
      }
    ]
  }
};
