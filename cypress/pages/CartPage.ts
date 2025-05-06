class CartPage {
  // Page elements
  private checkoutButton = '[data-testid="checkout-button"]';
  
  /**
   * Verify that a specific product is in the cart
   * @param productName - The name of the product to verify
   */
  verifyProductInCart(productName: string) {
    cy.url().should('include', '/cart');
    cy.contains(productName).should('be.visible');
    return this;
  }
  
  /**
   * Verify the product price in the cart
   * @param price - The expected price of the product (e.g. '$109.95')
   */
  verifyProductPrice(price: string) {
    cy.contains(price).should('be.visible');
    return this;
  }
  
  /**
   * Proceed to checkout
   */
  proceedToCheckout() {
    cy.get(this.checkoutButton).click();
    return this;
  }
}

export default new CartPage(); 