// ***********************************************************
// This support file configures Cypress for e2e testing
// ***********************************************************

// Import cypress commands
import './commands';

// Import cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';

// Hide fetch/XHR requests from command log
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.setAttribute('data-hide-command-log-request', '');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  app.document.head.appendChild(style);
}

// Before each test
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Prevents Cypress from failing the test when application throws an uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});

// Add viewport command to quickly adjust viewport size
Cypress.Commands.add('setViewport', (size: string) => {
  if (size === 'mobile') {
    cy.viewport(375, 667); // iPhone 8
  } else if (size === 'tablet') {
    cy.viewport(768, 1024); // iPad
  } else if (size === 'desktop') {
    cy.viewport(1280, 720); // Standard desktop
  } else {
    // Default desktop
    cy.viewport(1280, 720);
  }
  cy.task('log', `Viewport set to: ${size}`);
}); 