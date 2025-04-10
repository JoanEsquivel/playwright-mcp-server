import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('SauceDemo Login Tests', () => {
  beforeEach(() => {
    cy.task('log', '=== Starting Test ===');
    // Load fixture data
    cy.fixture('credentials.json').as('credentials');
  });

  it('Scenario 1: Valid Login and Logout', () => {
    cy.get('@credentials').then((credentials: any) => {
      const { username, password } = credentials.standardUser;
      
      // Login with valid credentials
      LoginPage.visit()
        .login(username, password);
      
      // Verify successful login
      ProductsPage.isLoaded();
      
      // Logout
      ProductsPage.logout();
      
      // Verify back at login page
      cy.url().should('include', '/');
      cy.task('log', 'Successfully logged out and returned to login page');
    });
  });

  it('Scenario 2: Locked Out User', () => {
    cy.get('@credentials').then((credentials: any) => {
      const { username, password } = credentials.lockedOutUser;
      const errorMessage = credentials.errorMessages.lockedOutUser;
      
      // Attempt login with locked out user
      LoginPage.visit()
        .login(username, password)
        .verifyErrorMessage(errorMessage);
      
      cy.task('log', 'Locked out user test completed successfully');
    });
  });
}); 