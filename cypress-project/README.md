# SauceDemo Cypress Tests

This project contains automated tests for the SauceDemo website using Cypress with TypeScript and following the Page Object Model pattern.

## Project Structure

```
cypress-project/
├── cypress/
│   ├── e2e/              # Test files
│   │   ├── valid-login.cy.ts
│   │   └── locked-out-user.cy.ts
│   ├── fixtures/         # Test data
│   │   └── users.json
│   ├── pages/            # Page Object Models
│   │   ├── LoginPage.ts
│   │   └── ProductsPage.ts
│   └── support/          # Support files
│       ├── commands.ts   # Custom commands
│       └── e2e.ts        # Configuration
├── cypress.config.ts     # Cypress configuration
├── cypress.env.json      # Environment variables (not committed to Git)
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Features

- Two test scenarios: Valid Login and Locked Out User
- Page Object Model for better maintainability
- TypeScript for type safety
- Mochawesome reporter for HTML test reports
- Custom task for detailed logging
- GitHub Actions workflow for CI

## Installation

1. Clone the repository
2. Install dependencies:

```bash
cd cypress-project
npm install
```

## Running Tests

### Headless Mode

To run all tests in headless mode:

```bash
npm run test
```

### UI Mode

To open Cypress in UI mode:

```bash
npm run cypress:open
```

## Reports

After running tests, HTML reports will be generated in the `cypress/reports` directory. 