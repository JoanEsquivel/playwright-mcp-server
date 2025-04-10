/**
 * BasePage class containing common methods and properties for all page objects
 */
/// <reference types="cypress" />

export class BasePage {
  /**
   * Logs a message to the console using custom task
   * @param message - The message to log
   */
  logInfo(message: string): void {
    cy.task('log', `INFO: ${message}`);
  }

  /**
   * Waits for a specified element to be visible
   * @param selector - The element selector
   * @param timeout - Optional timeout in ms
   */
  waitForElement(selector: string, timeout = 10000): Cypress.Chainable<JQuery<HTMLElement>> {
    this.logInfo(`Waiting for element: ${selector}`);
    return cy.get(selector, { timeout });
  }

  /**
   * Clicks on an element
   * @param selector - The element selector
   */
  clickElement(selector: string): void {
    this.logInfo(`Clicking element: ${selector}`);
    cy.get(selector).click();
  }

  /**
   * Types text into an input field
   * @param selector - The input element selector
   * @param text - The text to type
   */
  typeText(selector: string, text: string): void {
    this.logInfo(`Typing "${text}" into: ${selector}`);
    cy.get(selector).clear().type(text);
  }

  /**
   * Verifies element contains text
   * @param selector - The element selector
   * @param text - The expected text
   */
  verifyText(selector: string, text: string): void {
    this.logInfo(`Verifying text "${text}" in: ${selector}`);
    cy.get(selector).should('contain', text);
  }
} 