import { loginPage } from '../pages/LoginPage';
import { productsPage } from '../pages/ProductsPage';

describe('Sauce Demo Login Tests', () => {
  beforeEach(() => {
    cy.logInfo('Starting new test');
    loginPage.visit();
  });

  it('should login successfully with standard user', () => {
    cy.logStep('Attempting login with standard user');
    loginPage.login(Cypress.env('standardUser'), Cypress.env('password'));

    cy.logStep('Verifying successful login');
    productsPage.getTitle().should('have.text', 'Products');
    cy.logAssertion('User is on Products page');

    cy.logStep('Logging out');
    productsPage.logout();
  });

  it('should show error message for locked out user', () => {
    cy.logStep('Attempting login with locked out user');
    loginPage.login(Cypress.env('lockedOutUser'), Cypress.env('password'));

    cy.fixture('testData').then((data) => {
      cy.logStep('Verifying error message');
      loginPage.getErrorMessage()
        .should('be.visible')
        .and('have.text', data.lockedOutUser.errorMessage);
      cy.logAssertion('Correct error message is displayed');
    });
  });
}); 