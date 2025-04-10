/// <reference types="cypress" />
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Selectors
  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = '#login-button';
  private readonly errorMessage = '[data-test="error"]';

  /**
   * Navigate to the login page
   */
  visit(): void {
    this.logInfo('Navigating to login page');
    cy.visit('/');
  }

  /**
   * Login with username and password
   * @param username - The username to use
   * @param password - The password to use
   */
  login(username: string, password: string): void {
    this.logInfo(`Logging in with username: ${username}`);
    this.typeText(this.usernameInput, username);
    this.typeText(this.passwordInput, password);
    this.clickElement(this.loginButton);
  }

  /**
   * Get the error message text
   * @returns Cypress.Chainable with the error message element
   */
  getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    this.logInfo('Getting error message');
    return cy.get(this.errorMessage);
  }

  /**
   * Verify error message contains specific text
   * @param text - The expected error text
   */
  verifyErrorMessage(text: string): void {
    this.logInfo(`Verifying error message contains: ${text}`);
    this.getErrorMessage().should('contain', text);
  }
} 