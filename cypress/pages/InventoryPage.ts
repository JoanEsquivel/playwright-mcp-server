class InventoryPage {
  // Selectors
  private burgerMenu = '#react-burger-menu-btn'
  private logoutLink = '#logout_sidebar_link'
  private inventoryContainer = '#inventory_container'

  // Methods
  isVisible() {
    cy.task('log', 'Verifying inventory page is visible')
    return cy.get(this.inventoryContainer).should('be.visible')
  }

  logout() {
    cy.task('log', 'Logging out')
    cy.get(this.burgerMenu).click()
    cy.get(this.logoutLink).click()
  }
}

export default new InventoryPage() 