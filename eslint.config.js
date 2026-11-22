// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier');

module.exports = defineConfig([
  expoConfig,
  // Turns off formatting rules so ESLint and Prettier do not disagree.
  prettierConfig,
  {
    ignores: ['dist/*', '.expo/*', 'android/*', 'ios/*'],
  },
]);
