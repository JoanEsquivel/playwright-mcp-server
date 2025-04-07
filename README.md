# SauceDemo Cypress Tests

This project contains automated tests for the SauceDemo website using Cypress with TypeScript and follows the Page Object Model pattern.

## Test Scenarios

1. Valid Login - Tests successful login with standard_user
2. Locked Out User - Tests error message when logging in with locked_out_user

## Project Structure

```
├── cypress/
│   ├── e2e/               # Test files
│   ├── fixtures/          # Test data
│   ├── pages/             # Page Objects
│   └── support/           # Support files and commands
├── .github/workflows/     # GitHub Actions workflows
├── cypress.config.ts      # Cypress configuration
├── cypress.env.json       # Environment variables (not committed to git)
├── package.json           # Project dependencies
└── tsconfig.json          # TypeScript configuration
```

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

### Run tests in headless mode:

```bash
npm run cy:run
```

### Open Cypress Test Runner:

```bash
npm run cy:open
```

## CI/CD

This project uses GitHub Actions for continuous integration. The workflow:

1. Runs on pushes to the master branch and pull requests
2. Installs dependencies
3. Runs Cypress tests in headless mode
4. Generates and uploads Mochawesome reports
5. Uploads screenshots on test failure

## Test Reporting

The project uses cypress-mochawesome-reporter for generating HTML reports. After running tests, reports can be found in the `cypress/reports` directory. 