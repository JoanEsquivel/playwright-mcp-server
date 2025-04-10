class LoginPage {
  // Selectors
  private usernameInput = '[data-test="username"]'
  private passwordInput = '[data-test="password"]'
  private loginButton = '[data-test="login-button"]'
  private errorMessage = '[data-test="error"]'

  // Methods
  visit() {
    cy.visit('/')
    return this
  }

  login(username: string, password: string) {
    cy.task('log', `Logging in with username: ${username}`)
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput).type(password)
    cy.get(this.loginButton).click()
    return this
  }

  getErrorMessage() {
    return cy.get(this.errorMessage)
  }
}

export default new LoginPage() 