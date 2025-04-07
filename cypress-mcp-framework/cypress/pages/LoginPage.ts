class LoginPage {
  private selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  }

  visit() {
    cy.visit('/')
  }

  login(username: string, password: string) {
    cy.get(this.selectors.username).type(username)
    cy.get(this.selectors.password).type(password)
    cy.get(this.selectors.loginButton).click()
  }

  getErrorMessage() {
    return cy.get(this.selectors.errorMessage)
  }
}

export default new LoginPage() 