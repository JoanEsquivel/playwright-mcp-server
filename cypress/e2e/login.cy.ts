import LoginPage from '../pages/LoginPage';

describe('SauceDemo Login Tests', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('userData');
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', function() {
    const { standardUser } = this.userData;
    LoginPage.login(standardUser.username, standardUser.password);
    cy.url().should('include', '/inventory.html');
    cy.task('log', 'Successfully logged in with standard user');
  });

  it('should show error message for locked out user', function() {
    const { lockedOutUser } = this.userData;
    LoginPage.login(lockedOutUser.username, lockedOutUser.password);
    LoginPage.getErrorMessage().should('contain', 'Sorry, this user has been locked out');
    cy.task('log', 'Verified locked out user error message');
  });
}); 