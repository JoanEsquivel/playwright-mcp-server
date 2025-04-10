import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Valid Login Test', () => {
  it('should login successfully with standard user', () => {
    cy.logAction('Starting Valid Login Test');
    
    // Get credentials from environment variables
    const username = Cypress.env('standardUsername');
    const password = Cypress.env('password');
    
    // Login with valid credentials
    LoginPage.visit()
      .login(username, password);
    
    // Verify successful login
    InventoryPage.isLoaded();
    
    // Logout to avoid cache issues
    InventoryPage.logout();
    
    cy.logAction('Completed Valid Login Test');
  });
}); 