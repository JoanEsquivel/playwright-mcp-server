import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  // Selectors
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  /**
   * Constructor with URL initialization
   */
  constructor() {
    super();
  }

  /**
   * Navigate to login page
   */
  visitLoginPage(): void {
    this.navigate('/');
  }

  /**
   * Login with username and password
   * @param username Username to login with
   * @param password Password to login with
   */
  login(username: string, password: string): void {
    this.clearAndTypeText(this.usernameInput, username);
    this.clearAndTypeText(this.passwordInput, password);
    this.clickElement(this.loginButton);
  }

  /**
   * Verify login error message
   * @param expectedErrorText The expected error text
   */
  verifyLoginError(expectedErrorText: string): void {
    this.verifyElementVisible(this.errorMessage);
    this.verifyText(this.errorMessage, expectedErrorText);
  }
} 