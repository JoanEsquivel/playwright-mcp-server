import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Valid Login Test', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    cy.fixture('users').then(function (users) {
      this.users = users;
    });
  });

  it('should successfully login with valid user', function () {
    // Visit the login page
    loginPage.visit();

    // Login with standard user
    loginPage.login(this.users.standardUser.username, Cypress.env('password'));

    // Verify successful login
    productsPage.isVisible();
    productsPage.getInventoryItems().should('have.length.at.least', 1);
    
    // Logout
    loginPage.logout();
  });
}); 