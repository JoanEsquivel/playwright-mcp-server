# E-commerce Test Automation with Cypress

This project contains end-to-end tests for a mock e-commerce application using Cypress with TypeScript and the Page Object Model pattern.

## Overview

The tests automate two main flows:
1. Successful order flow - a user who can complete a purchase successfully
2. Failed order flow - a user whose payments are always declined

## Project Structure

```
cypress/
  ├── e2e/                  # Test files
  │   ├── successful-order-flow.cy.ts
  │   └── failed-order-flow.cy.ts
  ├── fixtures/             # Test data
  │   ├── users.json
  │   ├── products.json
  │   └── payment.json
  ├── pages/                # Page Objects
  │   ├── LoginPage.ts
  │   ├── ProductsPage.ts
  │   ├── CartPage.ts
  │   └── CheckoutPage.ts
  └── support/              # Support files
      ├── commands.ts
      └── e2e.ts
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   - Create a `cypress.env.json` file (already included but should not be committed to version control in a real project)
   - Or use a `.env` file with the necessary credentials

## Running the Tests

Run all tests:
```
npm test
```

Run tests in headless mode:
```
npm run test:headless
```

Run specific test flow:
```
npm run test:success  # Successful order flow
npm run test:failure  # Failed order flow
```

Open Cypress GUI:
```
npm run cypress:open
```

## Environment Variables

The following environment variables are used:

- `CYPRESS_USERNAME`: Username for successful login
- `CYPRESS_PASSWORD`: Password for both users
- `CYPRESS_FAILURE_USERNAME`: Username for the user with failed payments

These can be set in:
1. `cypress.env.json` file (for local development)
2. `.env` file
3. CI/CD pipeline environment variables

## Test Application

The tests are designed for the mock e-commerce application located at:  
https://v0-imagine-deals.vercel.app

## Notes

- This is a demo project for testing purposes only
- The application simulates payment scenarios:
  - Any total ending in .99 will simulate a declined payment
  - Any total ending in .88 will simulate a network error 