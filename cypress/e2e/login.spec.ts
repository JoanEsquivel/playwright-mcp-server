/// <reference types="cypress" />

import { LoginPage } from '../pages/LoginPage';

describe('SauceDemo Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage
      .login('standard_user', 'secret_sauce')
      .verifySuccessfulLogin();
  });

  it('should show error message for locked out user', () => {
    loginPage
      .login('locked_out_user', 'secret_sauce')
      .verifyErrorMessage('Sorry, this user has been locked out.');
  });
}); 