import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('E-commerce Failed Order Flow', () => {
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
  
  it('Test Case 2: Failed Order Flow', () => {
    // Visit the login page and login with failure test credentials
    LoginPage
      .visit()
      .login(users.failureUser.username, users.failureUser.password)
      .verifySuccessfulLogin(users.failureUser.username);
    
    // Add product to cart and verify
    // Note: We use product with price ending in .99 to trigger a declined payment
    ProductsPage
      .addProductToCartByName(products.failureProduct.name)
      .verifyCartItemCount(1)
      .goToCart();
    
    // Verify product in cart and proceed to checkout
    CartPage
      .verifyProductInCart(products.failureProduct.name)
      .verifyProductPrice(products.failureProduct.price)
      .proceedToCheckout();
    
    // Fill shipping information and payment details
    CheckoutPage
      .fillShippingInfo(
        users.failureUser.fullName,
        users.failureUser.email,
        users.failureUser.address
      )
      .continueToPayment()
      .fillPaymentInfo(
        payment.cardInfo.number,
        users.failureUser.fullName,
        payment.cardInfo.expiryDate,
        payment.cardInfo.cvv
      )
      .placeOrder()
      .verifyPaymentFailure();
    
    // Sign out
    ProductsPage.signOut();
  });
}); 