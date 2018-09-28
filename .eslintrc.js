module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        2,
        "always"
    ],
    "jsx-quotes": [
        2,
        "prefer-single"
    ],
    "react/jsx-curly-spacing": [
        2,
        "always"
    ],
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": [1, {
        "extensions": [".js", ".jsx"]
    }],
    "comma-dangle": "off",
    "react/no-deprecated": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "camelcase": "off",
    "no-param-reassign": "off",
    "no-useless-escape": "off",
    "no-restricted-properties": "off",
    "consistent-return": "off",
    "guard-for-in": "off",
    "no-loop-func": "off",
    "curly": ["error", "all"],
    "brace-style": ["error", "1tbs"],
    "default-case": "off",
    "prefer-destructuring": "off",
    "max-len": ["error", {
        "code": 100
    }],
    "implicit-arrow-linebreak": ["error", "beside"],
    "arrow-parens": ["error", "always"],
    "object-curly-spacing": ["error", "never"],
    "no-unused-vars": ["error", {
        "vars": "all",
        "args": "after-used"
    }],
    "class-methods-use-this": [0],
    "indent": ["error", "tab", {
        "SwitchCase": 2
    }],
    "no-throw-literal": [0],
    "operator-assignment": [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
