# SauceDemo Cypress Tests

This project contains automated tests for the SauceDemo website using Cypress with TypeScript.

## Test Scenarios

1. Valid Login (with Logout)
2. Locked Out User

## Project Structure

```
├── cypress/
│   ├── e2e/              # Test files
│   ├── fixtures/         # Test data
│   ├── pages/            # Page Object Model classes
│   ├── support/          # Custom commands and configuration
│   └── reports/          # Generated test reports
├── cypress.config.ts     # Cypress configuration
├── cypress.env.json      # Environment variables (not tracked in git)
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

To run tests in headless mode:

```bash
npm run cy:run
```

To open Cypress GUI:

```bash
npm run cy:open
```

## Reports

Test reports are generated in the `cypress/reports/html` directory after running tests in headless mode.

## GitHub Actions

This project uses GitHub Actions for continuous integration. The workflow installs dependencies and runs the Cypress tests automatically on push or pull request to the master branch.

## Page Object Model

The tests use the Page Object Model pattern to separate test logic from page-specific selectors and actions, making the tests more maintainable and readable. 