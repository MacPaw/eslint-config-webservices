module.exports = {
  plugins: [
    'jsx-a11y',
    'react'
  ],

  ecmaFeatures: {
    jsx: true
  },

  rules: {
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/img-has-alt': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
  },
};