// Import cypress commands
import './commands';

// Configure Cypress to prevent TypeScript errors
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands if needed
    }
  }
}

// Use native Cypress commands instead of custom ones
export {}; 