module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true
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
