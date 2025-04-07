/// <reference types="cypress" />

export default class BasePage {
  /**
   * Navigate to a specific URL
   * @param url The URL to navigate to
   */
  navigate(url: string): void {
    cy.visit(url);
    cy.task('log', `Navigated to: ${url}`);
  }

  /**
   * Get an element by selector
   * @param selector The CSS selector
   */
  getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  /**
   * Click on an element
   * @param selector The CSS selector
   */
  clickElement(selector: string): void {
    this.getElement(selector).click();
    cy.task('log', `Clicked element: ${selector}`);
  }

  /**
   * Type text into an input field
   * @param selector The CSS selector
   * @param text The text to type
   */
  typeText(selector: string, text: string): void {
    this.getElement(selector).type(text);
    cy.task('log', `Typed text into ${selector}: ${text}`);
  }

  /**
   * Clear an input field and type text
   * @param selector The CSS selector
   * @param text The text to type
   */
  clearAndTypeText(selector: string, text: string): void {
    this.getElement(selector).clear().type(text);
    cy.task('log', `Cleared and typed text into ${selector}: ${text}`);
  }

  /**
   * Verify text content of an element
   * @param selector The CSS selector
   * @param text The expected text
   */
  verifyText(selector: string, text: string): void {
    this.getElement(selector).should('contain.text', text);
    cy.task('log', `Verified text in ${selector}: ${text}`);
  }

  /**
   * Verify element is visible
   * @param selector The CSS selector
   */
  verifyElementVisible(selector: string): void {
    this.getElement(selector).should('be.visible');
    cy.task('log', `Verified element is visible: ${selector}`);
  }

  /**
   * Verify element exists
   * @param selector The CSS selector
   */
  verifyElementExists(selector: string): void {
    this.getElement(selector).should('exist');
    cy.task('log', `Verified element exists: ${selector}`);
  }
} 