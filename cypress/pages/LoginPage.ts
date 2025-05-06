class LoginPage {
  // Page elements
  private usernameInput = '[data-testid="login-username"]';
  private passwordInput = '[data-testid="login-password"]';
  private signInButton = '[data-testid="login-button"]';
  
  /**
   * Navigate to the login page
   */
  visit() {
    cy.visit('/login');
    return this;
  }
  
  /**
   * Type username into the username field
   * @param username - The username to enter
   */
  typeUsername(username: string) {
    cy.get(this.usernameInput).type(username);
    return this;
  }
  
  /**
   * Type password into the password field
   * @param password - The password to enter
   */
  typePassword(password: string) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  
  /**
   * Click the sign in button
   */
  clickSignIn() {
    cy.get(this.signInButton).click();
    return this;
  }
  
  /**
   * Perform login using provided credentials
   * @param username - The username to login with
   * @param password - The password to login with
   */
  login(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickSignIn();
    return this;
  }
  
  /**
   * Verify successful login by checking the username display
   * @param username - The username that should be displayed after login
   */
  verifySuccessfulLogin(username: string) {
    cy.url().should('include', '/products');
    cy.contains(`Hello, ${username}`).should('be.visible');
    return this;
  }
}

export default new LoginPage(); 