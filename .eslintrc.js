module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      2,
      {
        "singleQuote": true,
        "semi": true
      },
    ],
    "comma-dangle": 0,
    "import/no-extraneous-dependencies": 0
  }
}