class ProductsPage {
  // Selectors
  private pageTitle = '.title';
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  // Methods
  isLoaded() {
    cy.get(this.pageTitle).should('contain.text', 'Products');
    cy.task('log', 'Verified Products page is loaded');
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

export default new ProductsPage(); 