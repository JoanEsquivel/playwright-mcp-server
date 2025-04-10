/// <reference types="cypress" />
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

describe('SauceDemo Login Tests', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  
  beforeEach(() => {
    cy.task('log', '-------- Starting new test --------');
    loginPage.visit();
  });
  
  it('should login successfully with valid credentials', () => {
    cy.fixture('testData.json').then((testData) => {
      // Login with standard user
      const username = Cypress.env('users').standard;
      const password = Cypress.env('password');
      loginPage.login(username, password);
      
      // Verify successful login
      inventoryPage.verifyInventoryPage();
      inventoryPage.getInventoryItemCount().should('eq', testData.validUser.expectedItems);
      
      // Logout
      inventoryPage.logout();
    });
  });
  
  it('should show error message for locked out user', () => {
    cy.fixture('testData.json').then((testData) => {
      // Login with locked user
      const username = Cypress.env('users').locked;
      const password = Cypress.env('password');
      loginPage.login(username, password);
      
      // Verify error message
      loginPage.verifyErrorMessage(testData.lockedUser.errorMessage);
    });
  });
}); 