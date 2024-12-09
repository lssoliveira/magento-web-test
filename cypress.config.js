const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({

  e2e: {
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    pageLoadTimeout: 30000,
    responseTimeout: 30000,
    chromeWebSecurity: false,
    clearCookies: true,
    clearLocalStorage: true,
    clearSessionStorage: true,
    numTestsKeptInMemory: 10,
    experimentalMemoryManagement: true,
    screenshotOnRunFailure: false,
    failOnStatusCode: false,
    retries: 2,
    hostMagento: 'https://magento.softwaretestingboard.com/',
    baseUrl: 'https://magento.softwaretestingboard.com/',
    specPattern: '**/*.spec.js',
    env: {
      configFile: 'PRD',
      userDefault: 'lucas.schmidt.qa@gmail.com',
      passDefault: process.env.CYPRESS_PASS_DEFAULT || '',
    },

    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 30000;
      if (config.env.configFile === 'PRD') {
        config.env.ENVIRONMENT = 'prd';
        config.env.baseUrl = 'https://magento.softwaretestingboard.com/';
        config.env.hostMagento = 'https://magento.softwaretestingboard.com/';
      }
      else if (config.env.configFile === 'DEV') {
        config.env.ENVIRONMENT = 'dev';
        config.env.baseUrl = 'https://magento.softwaretestingboard.com/';
        config.env.hostMagento = 'https://magento.softwaretestingboard.com/';
      }

      require('cypress-localstorage-commands/plugin')(on, config);
      require('@cypress/grep/src/plugin')(config);
      allureCypress(on, config, {
        resultsDir: 'allure-results',
      });
      return config;
    },
  }
})
