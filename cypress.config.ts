import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SauceDemo Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Custom task for logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.ts',
  },
}); 