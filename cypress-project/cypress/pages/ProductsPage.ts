class ProductsPage {
  private productsTitle = '.title';
  private inventoryItems = '.inventory_item';

  isVisible() {
    cy.get(this.productsTitle).should('have.text', 'Products');
    cy.task('log', 'Verifying Products page is visible');
    return this;
  }

  getInventoryItems() {
    return cy.get(this.inventoryItems);
  }
}

export default ProductsPage; 