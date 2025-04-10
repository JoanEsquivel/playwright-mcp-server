import LoginPage from '../pages/LoginPage';

describe('Locked Out User Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.fixture('users').then(function (users) {
      this.users = users;
    });
  });

  it('should show error message for locked out user', function () {
    // Visit the login page
    loginPage.visit();

    // Login with locked out user
    loginPage.login(this.users.lockedOutUser.username, Cypress.env('password'));

    // Verify error message
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out');
    
    cy.log('Verified locked out user error message');
  });
}); 