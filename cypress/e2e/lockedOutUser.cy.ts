import LoginPage from '../pages/LoginPage';

describe('Locked Out User Test', () => {
  it('should show error message for locked out user', () => {
    cy.logAction('Starting Locked Out User Test');
    
    // Get credentials from environment variables
    const username = Cypress.env('lockedOutUsername');
    const password = Cypress.env('password');
    
    // Login with locked out user credentials
    LoginPage.visit()
      .login(username, password);
    
    // Verify error message is displayed
    LoginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out');
    
    cy.logAction('Completed Locked Out User Test');
  });
}); 