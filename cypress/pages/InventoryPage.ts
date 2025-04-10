class InventoryPage {
  // Selectors
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';
  private appLogo = '.app_logo';

  // Methods
  isLoaded() {
    cy.get(this.appLogo).should('be.visible');
    cy.logAssertion('Verified inventory page is loaded');
    return this;
  }

  clickMenuButton() {
    cy.get(this.menuButton).click();
    cy.logAction('Clicked menu button');
    return this;
  }

  clickLogout() {
    cy.get(this.logoutLink).click();
    cy.logAction('Clicked logout link');
    return this;
  }

  logout() {
    this.clickMenuButton();
    this.clickLogout();
    return this;
  }
}

export default new InventoryPage(); 