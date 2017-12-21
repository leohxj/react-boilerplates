module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  rules: {
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'warn',
    'max-len': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'no-underscore-dangle': 'off'
  }
};
