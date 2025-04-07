/// <reference types="cypress" />

import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';

// Extend Cypress namespace for custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in using valid credentials
       * @example cy.loginWithValidUser()
       */
      loginWithValidUser(): Chainable<Element>;
      
      /**
       * Custom command to log in with specified credentials
       * @example cy.login('username', 'password')
       */
      login(username: string, password: string): Chainable<Element>;
      
      /**
       * Custom command to verify successful login
       * @example cy.verifySuccessfulLogin()
       */
      verifySuccessfulLogin(): Chainable<Element>;
      
      /**
       * Custom command to log a message to the console
       * @example cy.logMessage('Test message')
       */
      logMessage(message: string): Chainable<Element>;
    }
  }
}

// Custom command implementations
Cypress.Commands.add('loginWithValidUser', () => {
  const loginPage = new LoginPage();
  cy.logMessage('Logging in with standard user');
  loginPage.login(Cypress.env('standard_username'), Cypress.env('password'));
});

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPage();
  cy.logMessage(`Logging in with username: ${username}`);
  loginPage.login(username, password);
});

Cypress.Commands.add('verifySuccessfulLogin', () => {
  const productsPage = new ProductsPage();
  cy.logMessage('Verifying successful login');
  productsPage.verifyProductsPageLoaded();
});

Cypress.Commands.add('logMessage', (message) => {
  cy.task('log', message);
}); 