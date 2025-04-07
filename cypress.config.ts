import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Task for console logs
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
    },
    baseUrl: 'https://www.saucedemo.com',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'SauceDemo Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
}); 