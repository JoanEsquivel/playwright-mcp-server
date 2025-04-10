import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Valid Login Scenario', () => {
  let testData: any;
  
  before(() => {
    // Load test data
    cy.fixture('test-data.json').then((data) => {
      testData = data;
    });
  });
  
  it('should login with standard user successfully', () => {
    // Access environment variables defined in cypress.env.json
    const username = Cypress.env('users').standard.username;
    const password = Cypress.env('users').standard.password;
    
    // Perform login
    LoginPage
      .visit()
      .login(username, password);
    
    // Verify successful login
    InventoryPage
      .verifyProductsPage(testData.validLogin.productsHeader);
  });
}); 