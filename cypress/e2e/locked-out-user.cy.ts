import LoginPage from '../pages/LoginPage';

describe('Locked Out User Scenario', () => {
  let testData: any;
  
  before(() => {
    // Load test data
    cy.fixture('test-data.json').then((data) => {
      testData = data;
    });
  });
  
  it('should show error message for locked out user', () => {
    // Access environment variables defined in cypress.env.json
    const username = Cypress.env('users').locked.username;
    const password = Cypress.env('users').locked.password;
    
    // Perform login with locked out user
    LoginPage
      .visit()
      .login(username, password)
      .verifyErrorMessage(testData.lockedOutUser.errorMessage);
  });
}); 