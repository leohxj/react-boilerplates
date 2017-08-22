module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  "plugins": [
    "import"
  ],
  rules: {
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-underscore-dangle": "off",
  }
};
