/// <reference types="cypress" />

// Create a custom command for logging in
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.task('log', `Logging in with username: ${username}`);
  cy.get('#user-name').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('#login-button').click();
});

// Custom command for logout
Cypress.Commands.add('logout', () => {
  cy.task('log', 'Logging out');
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<Element>;
      logout(): Chainable<Element>;
    }
  }
} 