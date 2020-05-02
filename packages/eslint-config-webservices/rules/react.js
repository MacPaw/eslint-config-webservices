module.exports = {
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Airbnb rules overrides
    'react/jsx-filename-extension': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/sort-comp': ['error', {
      order: [
        'state',
        'instance-variables',
        'type-annotations',
        'constructor',
        'static-methods',
        'lifecycle',
        'render',
        '/^render.+$/',
        'everything-else',
      ],
    }],

    // Custom rules
    'react/forbid-foreign-prop-types': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      noSortAlphabetically: true,
    }],
  }
};
