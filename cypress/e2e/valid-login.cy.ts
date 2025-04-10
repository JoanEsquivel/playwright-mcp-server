import { LoginPage } from '../pages/LoginPage'

describe('Valid Login Test', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should login successfully with standard user', () => {
    cy.task('log', '🔍 Testing valid login scenario')
    cy.login(Cypress.env('standardUser'), Cypress.env('password'))
    cy.url().should('include', '/inventory.html')
    cy.logout()
  })
}) 