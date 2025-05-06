/// <reference types="cypress" />

describe('E-commerce application tests', () => {
  beforeEach(() => {
    // Clear cookies and localStorage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Test Case 1: Successful Order Flow', () => {
    // Visit the login page
    cy.visit('https://v0-imagine-deals.vercel.app/login');
    
    // Login with successful credentials
    cy.get('[data-testid="login-username"]').type('test_user');
    cy.get('[data-testid="login-password"]').type('test_pass');
    cy.get('[data-testid="login-button"]').click();
    
    // Verify successful login by checking URL and username display
    cy.url().should('include', '/products');
    cy.contains('Hello, test_user').should('be.visible');
    
    // Add first product to cart
    cy.get('[data-testid="add-to-cart-button"]').first().click();
    
    // Verify cart is updated
    cy.get('a').contains('1 Cart').should('be.visible');
    
    // Navigate to cart
    cy.get('a').contains('Cart').click();
    
    // Verify product is in cart
    cy.url().should('include', '/cart');
    cy.contains('Fjallraven - Foldsack No. 1 Backpack').should('be.visible');
    cy.contains('$109.95').should('be.visible');
    
    // Proceed to checkout
    cy.get('[data-testid="checkout-button"]').click();
    
    // Fill shipping information
    cy.get('[data-testid="shipping-name"]').type('Test User');
    cy.get('[data-testid="shipping-email"]').type('test@example.com');
    cy.get('[data-testid="shipping-address"]').type('123 Test Street, Test City, 12345');
    
    // Continue to payment
    cy.get('[data-testid="continue-to-payment-button"]').click();
    
    // Fill payment information
    cy.get('[data-testid="card-number-input"]').type('4242424242424242');
    cy.get('[data-testid="card-name-input"]').type('Test User');
    cy.get('[data-testid="expiry-date-input"]').type('12/25');
    cy.get('[data-testid="cvv-input"]').type('123');
    
    // Place order
    cy.get('[data-testid="place-order-button"]').click();
    
    // Verify successful order
    cy.contains('Order placed successfully!').should('be.visible');
    cy.contains('Transaction ID:').should('be.visible');
    
    // Continue shopping
    cy.get('button').contains('Continue Shopping').click();
    
    // Sign out
    cy.get('button').contains('Sign Out').click();
    
    // Verify signed out (back at login page)
    cy.url().should('include', '/login');
  });

  it('Test Case 2: Failed Order Flow', () => {
    // Visit the login page
    cy.visit('https://v0-imagine-deals.vercel.app/login');
    
    // Login with failure test credentials
    cy.get('[data-testid="login-username"]').type('test_failure');
    cy.get('[data-testid="login-password"]').type('test_pass');
    cy.get('[data-testid="login-button"]').click();
    
    // Verify successful login by checking URL and username display
    cy.url().should('include', '/products');
    cy.contains('Hello, test_failure').should('be.visible');
    
    // Add product to cart - we'll use the White Gold Plated Princess product as it costs $9.99
    // The site simulates declined payments for totals ending in .99
    cy.contains('White Gold Plated Princess').parents('div').find('[data-testid="add-to-cart-button"]').click();
    
    // Verify cart is updated
    cy.get('a').contains('1 Cart').should('be.visible');
    
    // Navigate to cart
    cy.get('a').contains('Cart').click();
    
    // Verify product is in cart
    cy.url().should('include', '/cart');
    cy.contains('White Gold Plated Princess').should('be.visible');
    cy.contains('$9.99').should('be.visible');
    
    // Proceed to checkout
    cy.get('[data-testid="checkout-button"]').click();
    
    // Fill shipping information
    cy.get('[data-testid="shipping-name"]').type('Test Failure');
    cy.get('[data-testid="shipping-email"]').type('failure@example.com');
    cy.get('[data-testid="shipping-address"]').type('123 Failure Street, Failure City, 54321');
    
    // Continue to payment
    cy.get('[data-testid="continue-to-payment-button"]').click();
    
    // Fill payment information
    cy.get('[data-testid="card-number-input"]').type('4242424242424242');
    cy.get('[data-testid="card-name-input"]').type('Test Failure');
    cy.get('[data-testid="expiry-date-input"]').type('12/25');
    cy.get('[data-testid="cvv-input"]').type('123');
    
    // Place order
    cy.get('[data-testid="place-order-button"]').click();
    
    // Verify payment failure
    cy.contains('Payment declined').should('be.visible');
    
    // Verify we're still on the checkout page and can try again
    cy.url().should('include', '/checkout');
    cy.get('[data-testid="place-order-button"]').should('be.visible');
    
    // Sign out
    cy.get('button').contains('Sign Out').click();
    
    // Verify signed out (back at login page)
    cy.url().should('include', '/login');
  });
}); 