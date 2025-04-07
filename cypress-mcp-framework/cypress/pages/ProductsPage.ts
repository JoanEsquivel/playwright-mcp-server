export class ProductsPage {
  private selectors = {
    title: '.title',
    burgerMenu: '#react-burger-menu-btn',
    logoutLink: '#logout_sidebar_link'
  };

  getTitle() {
    return cy.get(this.selectors.title);
  }

  logout() {
    cy.log('Logging out');
    cy.get(this.selectors.burgerMenu).click();
    cy.get(this.selectors.logoutLink).click();
    return this;
  }
}

export const productsPage = new ProductsPage(); 