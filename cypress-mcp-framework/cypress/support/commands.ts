declare namespace Cypress {
  interface Chainable {
    logInfo(message: string): void;
    logStep(message: string): void;
    logAssertion(message: string): void;
  }
}

Cypress.Commands.add('logInfo', (message: string) => {
  cy.task('log', `ℹ️ INFO: ${message}`);
});

Cypress.Commands.add('logStep', (message: string) => {
  cy.task('log', `▶️ STEP: ${message}`);
});

Cypress.Commands.add('logAssertion', (message: string) => {
  cy.task('log', `✅ ASSERT: ${message}`);
}); 