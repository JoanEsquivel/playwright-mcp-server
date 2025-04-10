// Import commands.js using ES2015 syntax:
import './commands';

// Import cypress-mochawesome-reporter for screenshots on failure
import 'cypress-mochawesome-reporter/register';

// Hide fetch/XHR requests in command log
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.setAttribute('data-hide-command-log-request', '');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  app.document.head.appendChild(style);
}

// Prevent TypeScript errors by declaring custom commands
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to login with specific user type
       * @example cy.loginAs('standard')
       */
      loginAs(userType: string): Chainable<void>;
    }
  }
} 