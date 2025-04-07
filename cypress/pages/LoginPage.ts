class LoginPage {
  // Selectors
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  // Methods
  visit() {
    cy.visit('/');
  }

  login(username: string, password: string) {
    cy.task('log', `Logging in with username: ${username}`);
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage(); 