/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('SauceDemo Login Tests', () => {
  beforeEach(() => {
    cy.task('log', 'Starting a new test');
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    cy.task('log', 'Running test: should login successfully with valid credentials');
    
    // Get test data from environment
    cy.fixture('testData.json').then((testData) => {
      // Login with valid credentials
      LoginPage.login(
        Cypress.env('users').standard.username, 
        Cypress.env('users').standard.password
      );

      // Verify successful login
      ProductsPage.getProductsHeader()
        .should('be.visible')
        .and('have.text', testData.pageTexts.productsHeader);
    });
  });

  it('should show error message for locked out user', () => {
    cy.task('log', 'Running test: should show error message for locked out user');
    
    cy.fixture('testData.json').then((testData) => {
      // Login with locked out user
      LoginPage.login(
        Cypress.env('users').locked.username, 
        Cypress.env('users').locked.password
      );

      // Verify error message
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('have.text', testData.errorMessages.lockedOutUser);
    });
  });
}); 