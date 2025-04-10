# Sauce Demo Cypress Tests

This project contains automated tests for the Sauce Demo website using Cypress with TypeScript.

## Project Structure

```
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── pages/         # Page Objects
│   └── support/       # Support files
├── cypress.config.ts  # Cypress configuration
├── cypress.env.json   # Environment variables (gitignored)
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `cypress.env.json` file with the following content:
   ```json
   {
     "standardUser": "standard_user",
     "lockedOutUser": "locked_out_user",
     "password": "secret_sauce"
   }
   ```

## Running Tests

To run tests in headless mode:
```bash
npx cypress run
```

To open Cypress Test Runner:
```bash
npx cypress open
```

## Test Reports

Test reports are generated using cypress-mochawesome-reporter and can be found in the `cypress/reports` directory after test execution. 