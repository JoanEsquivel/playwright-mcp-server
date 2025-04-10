import './commands';
import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
  cy.task('log', '🚀 Starting test...');
}); 