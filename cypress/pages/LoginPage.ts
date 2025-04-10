class LoginPage {
  // Selectors
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  // Actions
  visit() {
    cy.visit('/');
    cy.task('log', 'Navigated to login page');
    return this;
  }

  login(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.task('log', `Entered username: ${username}`);
    
    cy.get(this.passwordInput).type(password);
    cy.task('log', 'Entered password');
    
    cy.get(this.loginButton).click();
    cy.task('log', 'Clicked login button');
    return this;
  }

  // Assertions
  verifyErrorMessage(expectedErrorMessage: string) {
    cy.get(this.errorMessage)
      .should('be.visible')
      .and('contain.text', expectedErrorMessage);
    cy.task('log', `Verified error message: ${expectedErrorMessage}`);
    return this;
  }
}

export default new LoginPage(); 