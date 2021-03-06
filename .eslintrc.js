module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember-suave/no-direct-property-access': 'off',
    'ember-suave/require-access-in-comments': 'off',
    'ember-suave/require-const-for-ember-properties': 'off',
    'new-cap': 'off'
  }
};
