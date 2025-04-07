import './commands';
import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
  cy.logInfo(`Test started: ${Cypress.currentTest.title}`);
});

afterEach(() => {
  cy.logInfo(`Test completed: ${Cypress.currentTest.title}`);
}); 