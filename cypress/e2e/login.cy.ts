import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Sauce Demo Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login successfully with standard user', () => {
    LoginPage.login(Cypress.env('standardUser'), Cypress.env('password'))
    InventoryPage.isVisible()
    InventoryPage.logout()
  })

  it('should show error message for locked out user', () => {
    LoginPage.login(Cypress.env('lockedOutUser'), Cypress.env('password'))
    LoginPage.getErrorMessage().should('contain.text', 'Epic sadface: Sorry, this user has been locked out')
  })
}) 