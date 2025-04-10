/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in using environment variables
     */
    loginWithEnvCredentials(): Chainable<Element>;
  }
} 