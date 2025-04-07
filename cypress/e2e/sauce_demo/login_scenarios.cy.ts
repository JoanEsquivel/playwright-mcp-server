import LoginPage from '../../support/pages/LoginPage';
import ProductsPage from '../../support/pages/ProductsPage';

describe('Sauce Demo Login Tests', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  
  beforeEach(() => {
    // Visit the login page before each test
    loginPage.visitLoginPage();
    cy.logMessage('Navigated to the login page');
  });
  
  it('should login successfully with valid credentials', () => {
    // Arrange - Load test data from fixtures
    cy.fixture('users').then((users) => {
      const { username, password } = users.validUser;
      
      // Act - Perform login
      loginPage.login(username, password);
      
      // Assert - Verify we're on the products page
      productsPage.verifyProductsPageLoaded();
      
      // Cleanup - Logout for the next test
      productsPage.logout();
    });
  });
  
  it('should display error message for locked out user', () => {
    // Arrange - Load test data from fixtures
    cy.fixture('users').then((users) => {
      const { username, password, errorMessage } = users.lockedOutUser;
      
      // Act - Perform login with locked out user
      loginPage.login(username, password);
      
      // Assert - Verify error message is displayed
      loginPage.verifyErrorMessage(errorMessage);
    });
  });
}); 