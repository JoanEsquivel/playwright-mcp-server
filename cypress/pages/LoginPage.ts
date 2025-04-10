export class LoginPage {
  private selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  };

  visit() {
    cy.visit('/');
  }

  getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }
} 