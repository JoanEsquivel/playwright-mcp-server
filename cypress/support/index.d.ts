/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    logAction(message: string): Chainable<void>;
    logAssertion(message: string): Chainable<void>;
    login(username: string, password: string): Chainable<void>;
  }
} 