export class LoginPage {
  private selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  };

  visit() {
    cy.log('Visiting login page');
    cy.visit('/');
    return this;
  }

  login(username: string, password: string) {
    cy.log(`Logging in with username: ${username}`);
    cy.get(this.selectors.username).type(username);
    cy.get(this.selectors.password).type(password);
    cy.get(this.selectors.loginButton).click();
    return this;
  }

  getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }
}

export const loginPage = new LoginPage(); 