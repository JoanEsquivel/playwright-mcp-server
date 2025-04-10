import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Task for console logging
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.ts',
  },
}) 