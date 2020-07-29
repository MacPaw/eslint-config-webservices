module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
  },

  rules: {
    // Airbnb rules overrides
    'comma-dangle': ['warn', 'always-multiline'],
    'no-use-before-define': ['error', 'nofunc'],
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': 'off',
    'block-spacing': ['error', 'never'],
    'semi': ['error', 'always', {omitLastInOneLineBlock: true}],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'one-var': 'off',
    'class-methods-use-this': 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Custom rules
    'no-shadow': 'off', // to avoid warnings for mapped from redux properties
  },
};
