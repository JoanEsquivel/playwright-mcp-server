/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to log in using valid credentials
     * @example cy.loginWithValidUser()
     */
    loginWithValidUser(): Chainable<void>;
    
    /**
     * Custom command to log in with specified credentials
     * @example cy.login('username', 'password')
     */
    login(username: string, password: string): Chainable<void>;
    
    /**
     * Custom command to verify successful login
     * @example cy.verifySuccessfulLogin()
     */
    verifySuccessfulLogin(): Chainable<void>;
    
    /**
     * Custom command to log a message to the console
     * @example cy.logMessage('Test message')
     */
    logMessage(message: string): Chainable<void>;
  }
} 