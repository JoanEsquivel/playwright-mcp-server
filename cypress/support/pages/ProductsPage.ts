import BasePage from './BasePage';

export default class ProductsPage extends BasePage {
  // Selectors
  private productsTitle = '.title';
  private burgerMenuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  /**
   * Verifies that the products page is displayed
   */
  verifyProductsPageLoaded(): void {
    super.getElement(this.productsTitle).should('have.text', 'Products');
    this.logMessage('Verified that the Products page is loaded');
  }

  /**
   * Opens the burger menu
   */
  openBurgerMenu(): void {
    super.clickElement(this.burgerMenuButton);
  }

  /**
   * Clicks the logout link
   */
  clickLogout(): void {
    super.clickElement(this.logoutLink);
  }

  /**
   * Performs the logout flow
   */
  logout(): void {
    this.openBurgerMenu();
    this.clickLogout();
    this.logMessage('Logged out from the application');
  }
} 