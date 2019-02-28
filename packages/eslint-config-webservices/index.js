module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@macpaw/eslint-config-webservices-base',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
