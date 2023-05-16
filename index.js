module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  plugins: [
    "@typescript-eslint",
  ],

  rules: {
    "@typescript-eslint/array-type": ["error", {"default": "generic"}],

    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/member-delimiter-style": ["error", {"multiline": {"delimiter": "none", "requireLast": true}, "singleline": {"delimiter": "comma", "requireLast": false}, "multilineDetection": "brackets"}],
  },
};
