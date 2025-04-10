// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Add TypeScript definitions
/// <reference types="cypress" />

// Declare global namespace for Cypress
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in using environment variables
       */
      loginWithEnvCredentials(): Chainable<Element>;
    }
  }
}

// Custom command to log in with environment credentials
Cypress.Commands.add('loginWithEnvCredentials', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  
  cy.task('log', `Logging in with username: ${username}`);
  
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
}); 