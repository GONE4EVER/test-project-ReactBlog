const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "globals": {
    "React": true
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
    "babel"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "import/no-extraneous-dependencies": 0,

    "comma-dangle": "off",
    "no-tabs": "off",

    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",

    "indent": ["error", "tab"],

    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
        "some": [ "nesting", "id" ]
      },
      "allowChildren": false
    }]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve('./webpack.config.js')
      }
    }
  }
}