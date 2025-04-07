/// <reference types="cypress" />

describe('Sauce Demo - Locked Out User', () => {
  beforeEach(() => {
    cy.task('log', 'Starting Locked Out User Test');
    cy.visit('/');
  });

  it('should show error message for locked out user', () => {
    // Load test data
    cy.fixture('testData.json').then((testData) => {
      // Get credentials from environment variables
      const username = Cypress.env('users').locked.username;
      const password = Cypress.env('users').locked.password;

      // Login with locked out user credentials
      cy.task('log', `Typing username: ${username}`);
      cy.get('#user-name').type(username);
      
      cy.task('log', `Typing password: ${password}`);
      cy.get('#password').type(password);
      
      cy.task('log', 'Clicking login button');
      cy.get('#login-button').click();

      // Verify error message
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', testData.lockedOutUser.errorMessage);
      
      cy.task('log', 'Locked Out User Test Completed Successfully');
    });
  });
}); 