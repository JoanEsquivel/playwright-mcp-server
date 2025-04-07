/// <reference types="cypress" />

describe('Sauce Demo - Valid Login', () => {
  beforeEach(() => {
    cy.task('log', 'Starting Valid Login Test');
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    // Load test data
    cy.fixture('testData.json').then((testData) => {
      // Get credentials from environment variables
      const username = Cypress.env('users').standard.username;
      const password = Cypress.env('users').standard.password;

      // Login with valid credentials
      cy.task('log', `Typing username: ${username}`);
      cy.get('#user-name').type(username);
      
      cy.task('log', `Typing password: ${password}`);
      cy.get('#password').type(password);
      
      cy.task('log', 'Clicking login button');
      cy.get('#login-button').click();

      // Verify successful login
      cy.url().should('include', testData.validLogin.expectedUrl);
      cy.get('.title').should('have.text', testData.validLogin.headerText);
      
      // Logout to avoid cache issues
      cy.task('log', 'Clicking menu button');
      cy.get('#react-burger-menu-btn').click();
      
      cy.task('log', 'Clicking logout link');
      cy.get('#logout_sidebar_link').click();
      
      cy.task('log', 'Valid Login Test Completed Successfully');
    });
  });
}); 