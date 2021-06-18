module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'arrow-body-style': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 'error',
    'prettier/prettier': ['error'],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
