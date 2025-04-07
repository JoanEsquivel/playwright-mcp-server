/// <reference types="cypress" />

export default class BasePage {
  /**
   * Logs a message to the console
   * @param message - The message to log
   */
  logMessage(message: string): void {
    cy.task('log', message);
  }

  /**
   * Navigates to a URL
   * @param url - The URL to navigate to
   */
  visit(url: string = '/'): void {
    cy.visit(url);
    this.logMessage(`Navigated to ${url}`);
  }

  /**
   * Gets an element by selector
   * @param selector - The element selector
   */
  getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  /**
   * Clicks on an element
   * @param selector - The element selector
   */
  clickElement(selector: string): void {
    this.getElement(selector).click();
    this.logMessage(`Clicked on element ${selector}`);
  }

  /**
   * Types text into an input field
   * @param selector - The input selector
   * @param text - The text to type
   */
  typeText(selector: string, text: string): void {
    this.getElement(selector).clear().type(text);
    this.logMessage(`Typed "${text}" into ${selector}`);
  }

  /**
   * Asserts that text is visible on the page
   * @param text - The text to assert
   */
  assertTextVisible(text: string): void {
    cy.contains(text).should('be.visible');
    this.logMessage(`Verified that text "${text}" is visible`);
  }
} 