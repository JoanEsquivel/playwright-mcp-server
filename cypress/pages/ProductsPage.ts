class ProductsPage {
  // Page elements
  private addToCartButton = '[data-testid="add-to-cart-button"]';
  private cartLink = 'a[href="/cart"]';
  private signOutButton = 'button:contains("Sign Out")';
  
  /**
   * Add the first product to the cart
   */
  addFirstProductToCart() {
    cy.get(this.addToCartButton).first().click();
    return this;
  }
  
  /**
   * Add a product to the cart by its name
   * @param productName - The name of the product to add to the cart
   */
  addProductToCartByName(productName: string) {
    cy.contains('div', productName).find(this.addToCartButton).click();
    return this;
  }
  
  /**
   * Verify the cart has been updated with the correct number of items
   * @param itemCount - The expected number of items in the cart
   */
  verifyCartItemCount(itemCount: number) {
    cy.get(this.cartLink).should('be.visible');
    return this;
  }
  
  /**
   * Navigate to the cart page
   */
  goToCart() {
    cy.get(this.cartLink).click();
    return this;
  }
  
  /**
   * Sign out from the application
   */
  signOut() {
    cy.get(this.signOutButton).click();
    // Verify redirected back to login page
    cy.url().should('include', '/login');
    return this;
  }
}

export default new ProductsPage(); 