import { LoginPage } from '../pages/LoginPage';

describe('Sauce Demo Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with standard user', () => {
    cy.task('log', '✅ Testing standard user login');
    cy.login(Cypress.env('standardUser'), Cypress.env('password'));
    cy.url().should('include', '/inventory.html');
    cy.logout();
  });

  it('should show error message for locked out user', () => {
    cy.task('log', '❌ Testing locked out user login');
    cy.login(Cypress.env('lockedOutUser'), Cypress.env('password'));
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out');
  });
}); 