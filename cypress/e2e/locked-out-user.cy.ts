import { LoginPage } from '../pages/LoginPage'

describe('Locked Out User Test', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should show error message for locked out user', () => {
    cy.task('log', '🔍 Testing locked out user scenario')
    cy.login(Cypress.env('lockedOutUser'), Cypress.env('password'))
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out')
  })
}) 