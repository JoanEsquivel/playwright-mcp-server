class LoginPage {
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  visit() {
    cy.visit('https://www.saucedemo.com');
    return this;
  }

  login(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
    
    cy.log(`Logging in with username: ${username}`);
    return this;
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  logout() {
    cy.get(this.menuButton).click();
    cy.get(this.logoutLink).click();
    
    cy.log('Logging out');
    return this;
  }
}

export default LoginPage; 