/// <reference types="cypress" />

export class LoginPage {
  private selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  };

  visit() {
    cy.visit('/');
    return this;
  }

  login(username: string, password: string) {
    cy.task('log', `Attempting to login with username: ${username}`);
    cy.get(this.selectors.username).type(username);
    cy.get(this.selectors.password).type(password);
    cy.get(this.selectors.loginButton).click();
    return this;
  }

  verifyErrorMessage(message: string) {
    cy.task('log', `Verifying error message: ${message}`);
    cy.get(this.selectors.errorMessage).should('contain.text', message);
    return this;
  }

  verifySuccessfulLogin() {
    cy.task('log', 'Verifying successful login');
    cy.url().should('include', '/inventory.html');
    return this;
  }
} 