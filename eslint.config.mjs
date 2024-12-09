import pluginJs from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  {
    plugins: {
      cypress: pluginCypress
    }
  },
  {
    ignores: ['cypress.config.exe.js', 'cypress.config.js', 'cypress/support/e2e.js']
  },
  {
    rules: {
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/unsafe-to-chain-command': 'error',
      'cypress/no-async-before': 'error',
      'cypress/no-debug': 'error'
    }
  },
  pluginJs.configs.recommended,
  pluginCypress.configs.recommended,
];