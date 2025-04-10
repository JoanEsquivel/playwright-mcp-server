class InventoryPage {
  // Selectors
  private productsHeader = '.title';
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  // Actions
  verifyProductsPage(expectedHeader: string) {
    cy.url().should('include', '/inventory.html');
    cy.get(this.productsHeader)
      .should('be.visible')
      .and('have.text', expectedHeader);
    cy.task('log', `Verified products page with header: ${expectedHeader}`);
    return this;
  }

  logout() {
    cy.get(this.menuButton).click();
    cy.task('log', 'Clicked menu button');
    
    cy.get(this.logoutLink).click();
    cy.task('log', 'Clicked logout link');
    return this;
  }
}

export default new InventoryPage(); 