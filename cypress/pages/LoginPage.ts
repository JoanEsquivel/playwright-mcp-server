/// <reference types="cypress" />

class LoginPage {
  // Elements
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  // Actions
  visit() {
    cy.task('log', 'Visiting login page');
    cy.visit('/');
    return this;
  }

  login(username: string, password: string) {
    cy.task('log', `Attempting to login with username: ${username}`);
    cy.get(this.usernameInput).clear().type(username);
    cy.get(this.passwordInput).clear().type(password);
    cy.get(this.loginButton).click();
    return this;
  }

  // Assertions
  getErrorMessage() {
    cy.task('log', 'Getting error message');
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage(); 