import LoginPage from '../pages/LoginPage'

describe('Sauce Demo Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login successfully with valid credentials', () => {
    LoginPage.login(Cypress.env('standardUser'), Cypress.env('password'))
    cy.url().should('include', '/inventory.html')
  })

  it('should show error message for locked out user', () => {
    LoginPage.login(Cypress.env('lockedOutUser'), Cypress.env('password'))
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out')
  })
}) 