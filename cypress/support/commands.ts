/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.task('log', `👤 Logging in with username: ${username}`)
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.task('log', '👋 Logging out')
  cy.get('#react-burger-menu-btn').click()
  cy.get('#logout_sidebar_link').click()
})

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
      logout(): Chainable<void>
    }
  }
} 