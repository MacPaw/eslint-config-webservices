module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/filenames',
    './rules/promise',
  ].map(require.resolve),
  rules: {}
};