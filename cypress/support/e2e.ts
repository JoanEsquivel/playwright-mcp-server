import 'cypress-mochawesome-reporter/register';

declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here if needed
    }
  }
} 