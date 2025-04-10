// ***********************************************
// Custom commands for Cypress tests
// ***********************************************

import { LoginPage } from '../pages/LoginPage';

// Add type definitions for Cypress global
/// <reference types="cypress" />

// Custom command to login with a specific user type
Cypress.Commands.add('loginAs', (userType: string) => {
  const loginPage = new LoginPage();
  const username = Cypress.env('users')[userType];
  const password = Cypress.env('password');
  
  cy.task('log', `Logging in as ${userType} user (${username})`);
  loginPage.visit();
  loginPage.login(username, password);
}); 