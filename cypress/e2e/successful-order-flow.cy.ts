import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('E-commerce Successful Order Flow', () => {
  let users: any;
  let products: any;
  let payment: any;
  
  before(() => {
    // Load fixture data
    cy.fixture('users').then((data) => {
      users = data;
    });
    cy.fixture('products').then((data) => {
      products = data;
    });
    cy.fixture('payment').then((data) => {
      payment = data;
    });
  });
  
  beforeEach(() => {
    // Clear cookies and localStorage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  
  it('Test Case 1: Successful Order Flow', () => {
    // Visit the login page and login with successful credentials
    LoginPage
      .visit()
      .login(users.successUser.username, users.successUser.password)
      .verifySuccessfulLogin(users.successUser.username);
    
    // Add product to cart and verify
    ProductsPage
      .addFirstProductToCart()
      .verifyCartItemCount(1)
      .goToCart();
    
    // Verify product in cart and proceed to checkout
    CartPage
      .verifyProductInCart(products.successProduct.name)
      .verifyProductPrice(products.successProduct.price)
      .proceedToCheckout();
    
    // Fill shipping information and payment details
    CheckoutPage
      .fillShippingInfo(
        users.successUser.fullName,
        users.successUser.email,
        users.successUser.address
      )
      .continueToPayment()
      .fillPaymentInfo(
        payment.cardInfo.number,
        users.successUser.fullName,
        payment.cardInfo.expiryDate,
        payment.cardInfo.cvv
      )
      .placeOrder()
      .verifySuccessfulOrder()
      .continueShopping();
    
    // Sign out
    ProductsPage.signOut();
  });
}); 