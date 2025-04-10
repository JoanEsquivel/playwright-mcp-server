// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

// Custom command to log actions
Cypress.Commands.add('logAction', (message: string) => {
  cy.task('log', `ACTION: ${message}`);
});

// Custom command to log assertions
Cypress.Commands.add('logAssertion', (message: string) => {
  cy.task('log', `ASSERTION: ${message}`);
});

// Custom command for login
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
  cy.logAction(`Logged in with username: ${username}`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      logAction(message: string): Chainable<void>;
      logAssertion(message: string): Chainable<void>;
      login(username: string, password: string): Chainable<void>;
    }
  }
} 