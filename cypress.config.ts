import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://v0-imagine-deals.vercel.app',
    viewportWidth: 1200,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
    video: false,
  },
  env: {
    // Environment variables will be loaded from cypress.env.json or .env file
  },
}); 