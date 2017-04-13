module.exports = {
  extends: [
    './rules/base',
    './rules/filenames',
    './rules/promise',
    './rules/react',
    './rules/jsx-a11y',
  ].map(require.resolve),
  rules: {}
};