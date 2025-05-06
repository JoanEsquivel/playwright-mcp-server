// Import commands.js using ES2015 syntax:
import './commands';

// Hide fetch/XHR requests in the command log
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Make this file a module by adding an empty export
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      // Custom command declarations would go here
    }
  }
} 