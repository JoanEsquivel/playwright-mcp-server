# Sauce Demo Cypress Tests

This project contains automated tests for the Sauce Demo website using Cypress with TypeScript and Page Object Model pattern.

## Project Structure

```
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── pages/         # Page objects
│   └── support/       # Support files and commands
├── cypress.config.ts  # Cypress configuration
├── cypress.env.json   # Environment variables (gitignored)
├── package.json       # Project dependencies
└── tsconfig.json     # TypeScript configuration
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
npm run cy:run
```

## Test Reports

Test reports are generated using cypress-mochawesome-reporter and can be found in the `cypress/reports/html` directory after test execution. 