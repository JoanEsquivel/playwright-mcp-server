/// <reference types="cypress" />
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  // Selectors
  private readonly burgerMenu = '#react-burger-menu-btn';
  private readonly logoutLink = '#logout_sidebar_link';
  private readonly pageTitle = '.title';
  private readonly inventoryItems = '.inventory_item';
  
  /**
   * Verify that user is on the inventory page
   */
  verifyInventoryPage(): void {
    this.logInfo('Verifying user is on inventory page');
    this.verifyText(this.pageTitle, 'Products');
  }
  
  /**
   * Logout from the application
   */
  logout(): void {
    this.logInfo('Logging out from the application');
    this.clickElement(this.burgerMenu);
    cy.wait(1000); // Wait for menu animation
    this.clickElement(this.logoutLink);
  }
  
  /**
   * Get the number of inventory items
   * @returns Cypress.Chainable with the number of items
   */
  getInventoryItemCount(): Cypress.Chainable<number> {
    this.logInfo('Getting inventory item count');
    return cy.get(this.inventoryItems).its('length');
  }
} 