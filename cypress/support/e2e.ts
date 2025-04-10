// Import commands.js using ES2015 syntax:
import './commands';

// Import cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';

// Hide fetch/XHR requests in the command log
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.setAttribute('data-hide-command-log-request', '');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  app.document.head.appendChild(style);
}

Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from failing the test
  return false;
}); 