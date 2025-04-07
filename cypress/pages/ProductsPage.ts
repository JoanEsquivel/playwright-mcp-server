/// <reference types="cypress" />

class ProductsPage {
  // Elements
  private productsHeader = '.title';
  private burgerMenu = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  // Assertions
  getProductsHeader() {
    cy.task('log', 'Getting products header');
    return cy.get(this.productsHeader);
  }

  // Actions
  logout() {
    cy.task('log', 'Logging out from products page');
    cy.get(this.burgerMenu).click();
    cy.get(this.logoutLink).click();
    return this;
  }

  isDisplayed() {
    cy.task('log', 'Checking if products page is displayed');
    return cy.get(this.productsHeader).should('be.visible');
  }
}

export default new ProductsPage(); 