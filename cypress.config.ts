import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Custom task for detailed logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
      return config;
    },
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: true,
    screenshotOnRunFailure: true
  },
  env: {
    // Environment variables can be set here. Sensitive data should be in cypress.env.json
  }
}); 