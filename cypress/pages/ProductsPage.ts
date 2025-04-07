/// <reference types="cypress" />
import BasePage from './BasePage';

class ProductsPage {
  // Selectors
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';
  private pageTitle = '.title';

  // Methods
  getPageTitle() {
    cy.task('log', 'Getting page title');
    return cy.get(this.pageTitle);
  }

  clickMenu() {
    cy.task('log', 'Clicking menu button');
    cy.get(this.menuButton).click();
    return this;
  }

  clickLogout() {
    cy.task('log', 'Clicking logout link');
    cy.get(this.logoutLink).click();
    return this;
  }

  logout() {
    this.clickMenu();
    this.clickLogout();
    return this;
  }
}

export default new ProductsPage(); 