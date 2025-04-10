# SauceDemo Cypress Test Automation

This project contains automated tests for the SauceDemo website using Cypress with TypeScript.

## Project Structure

```
├── cypress/
│   ├── e2e/               # Test files
│   ├── fixtures/          # Test data
│   ├── pages/             # Page objects
│   ├── support/           # Support files (commands, etc.)
│   └── reports/           # Test reports (generated)
├── .gitignore             # Git ignore file
├── cypress.config.ts      # Cypress configuration
├── cypress.env.json       # Environment variables (not committed)
├── package.json           # Project dependencies
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

## Test Scenarios

1. **Valid Login Test** - Tests successful login with standard user
2. **Locked Out User Test** - Tests error message for locked out user

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `cypress.env.json` file with the following content:

```json
{
  "standardUsername": "standard_user",
  "lockedOutUsername": "locked_out_user",
  "password": "secret_sauce"
}
```

## Running Tests

### Headless Mode

To run all tests in headless mode:

```bash
npm test
```

### Interactive Mode

To open Cypress in interactive mode:

```bash
npm run cy:open
```

## Reports

Test reports are generated using cypress-mochawesome-reporter and can be found in the `cypress/reports/html` directory after running the tests. 