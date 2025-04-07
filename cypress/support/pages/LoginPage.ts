import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  // Selectors
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  /**
   * Navigates to the login page
   */
  visitLoginPage(): void {
    super.visit('/');
  }

  /**
   * Enters username
   * @param username - The username to enter
   */
  enterUsername(username: string): void {
    super.typeText(this.usernameInput, username);
  }

  /**
   * Enters password
   * @param password - The password to enter
   */
  enterPassword(password: string): void {
    super.typeText(this.passwordInput, password);
  }

  /**
   * Clicks the login button
   */
  clickLogin(): void {
    super.clickElement(this.loginButton);
  }

  /**
   * Performs the login flow
   * @param username - The username to enter
   * @param password - The password to enter
   */
  login(username: string, password: string): void {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
    this.logMessage(`Attempted login with username: ${username}`);
  }

  /**
   * Verifies that an error message is displayed
   * @param errorText - The expected error text
   */
  verifyErrorMessage(errorText: string): void {
    super.getElement(this.errorMessage).should('contain.text', errorText);
    this.logMessage(`Verified error message: ${errorText}`);
  }
} 