// Import commands.js using ES2015 syntax:
import './commands';

// Import the reporter
import 'cypress-mochawesome-reporter/register';

// Cypress global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
}); 