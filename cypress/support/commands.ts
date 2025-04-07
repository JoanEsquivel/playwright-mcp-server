/// <reference types="cypress" />

// ***********************************************
// Commands.ts provides a custom commands for Cypress
// ***********************************************

// Add 3rd party commands

// Declare global Cypress namespace to prevent TypeScript errors
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to set viewport size
       * @example cy.setViewport('mobile')
       */
      setViewport(size: string): Chainable<Element>;
    }
  }
}

// Custom commands
Cypress.Commands.add('setViewport', (size: string) => {
  if (size === 'mobile') {
    cy.viewport(375, 667); // iPhone 8
  } else if (size === 'tablet') {
    cy.viewport(768, 1024); // iPad
  } else if (size === 'desktop') {
    cy.viewport(1280, 720); // Standard desktop
  } else {
    // Default desktop
    cy.viewport(1280, 720);
  }
  cy.task('log', `Viewport set to: ${size}`);
});

// This adds better intellisense for cy commands
export {}; 