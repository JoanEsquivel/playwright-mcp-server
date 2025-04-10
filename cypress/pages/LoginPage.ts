class LoginPage {
  // Selectors
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '.error-message-container';

  // Methods
  visit() {
    cy.visit('/');
    cy.logAction('Visited login page');
    return this;
  }

  typeUsername(username: string) {
    cy.get(this.usernameInput).type(username);
    cy.logAction(`Typed username: ${username}`);
    return this;
  }

  typePassword(password: string) {
    cy.get(this.passwordInput).type(password);
    cy.logAction('Typed password');
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    cy.logAction('Clicked login button');
    return this;
  }

  login(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return this;
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  verifyErrorMessage(expectedMessage: string) {
    this.getErrorMessage().should('contain.text', expectedMessage);
    cy.logAssertion(`Verified error message contains: ${expectedMessage}`);
    return this;
  }
}

export default new LoginPage(); 