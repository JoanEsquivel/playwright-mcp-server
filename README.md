# SauceDemo Cypress Tests

This project contains automated tests for the SauceDemo website using Cypress with TypeScript.

## Project Structure

```
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── pages/         # Page objects
│   └── support/       # Support files and commands
├── .github/
│   └── workflows/     # GitHub Actions workflows
├── cypress.config.ts  # Cypress configuration
├── package.json      # Project dependencies
└── tsconfig.json    # TypeScript configuration
```

## Prerequisites

- Node.js (v20.x recommended)
- npm

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `cypress.env.json` file with your credentials (a template is provided)

## Running Tests

To run tests in headless mode:
```bash
npm test
```

To open Cypress Test Runner:
```bash
npm run test:open
```

## Test Reports

Test reports are generated using cypress-mochawesome-reporter and can be found in the `cypress/reports` directory after test execution.

## CI/CD

The project uses GitHub Actions for continuous integration. The workflow:
- Runs on push/PR to master branch
- Installs dependencies
- Runs Cypress tests
- Uploads test reports as artifacts

## Linting

To run the linter:
```bash
npm run lint
``` 