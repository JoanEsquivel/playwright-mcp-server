class CheckoutPage {
  // Page elements
  private nameInput = '[data-testid="shipping-name"]';
  private emailInput = '[data-testid="shipping-email"]';
  private addressInput = '[data-testid="shipping-address"]';
  private continueToPaymentButton = '[data-testid="continue-to-payment-button"]';
  private cardNumberInput = '[data-testid="card-number-input"]';
  private cardNameInput = '[data-testid="card-name-input"]';
  private expiryDateInput = '[data-testid="expiry-date-input"]';
  private cvvInput = '[data-testid="cvv-input"]';
  private placeOrderButton = '[data-testid="place-order-button"]';
  private continueShoppingButton = 'button:contains("Continue Shopping")';
  
  /**
   * Fill the shipping information
   * @param name - Customer full name
   * @param email - Customer email address
   * @param address - Customer shipping address
   */
  fillShippingInfo(name: string, email: string, address: string) {
    cy.get(this.nameInput).type(name);
    cy.get(this.emailInput).type(email);
    cy.get(this.addressInput).type(address);
    return this;
  }
  
  /**
   * Continue to the payment step
   */
  continueToPayment() {
    cy.get(this.continueToPaymentButton).click();
    return this;
  }
  
  /**
   * Fill payment information
   * @param cardNumber - Credit card number
   * @param cardName - Name on the card
   * @param expiryDate - Card expiry date (format: MM/YY)
   * @param cvv - Card security code
   */
  fillPaymentInfo(cardNumber: string, cardName: string, expiryDate: string, cvv: string) {
    cy.get(this.cardNumberInput).type(cardNumber);
    cy.get(this.cardNameInput).type(cardName);
    cy.get(this.expiryDateInput).type(expiryDate);
    cy.get(this.cvvInput).type(cvv);
    return this;
  }
  
  /**
   * Place the order
   */
  placeOrder() {
    cy.get(this.placeOrderButton).click();
    return this;
  }
  
  /**
   * Verify successful order
   */
  verifySuccessfulOrder() {
    cy.contains('Order placed successfully!').should('be.visible');
    cy.contains('Transaction ID:').should('be.visible');
    return this;
  }
  
  /**
   * Verify payment failure
   */
  verifyPaymentFailure() {
    cy.contains('Payment declined').should('be.visible');
    cy.url().should('include', '/checkout');
    cy.get(this.placeOrderButton).should('be.visible');
    return this;
  }
  
  /**
   * Continue shopping after order completion
   */
  continueShopping() {
    cy.get(this.continueShoppingButton).click();
    return this;
  }
}

export default new CheckoutPage(); 