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
│   └── workflows/     # GitHub Actions workflow
├── cypress.config.ts  # Cypress configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## Prerequisites

- Node.js (v20 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
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

The project uses cypress-mochawesome-reporter for generating test reports. After test execution, you can find the HTML report in:
```
cypress/reports/html/index.html
```

## GitHub Actions

The project includes a GitHub Actions workflow that:
- Runs on push and pull requests to the master branch
- Installs dependencies
- Runs Cypress tests
- Uploads test reports as artifacts

## Page Object Model

The tests use the Page Object Model pattern for better maintainability:
- `LoginPage.ts` contains selectors and methods for the login page
- Test data is stored in `fixtures/users.json`
- Custom commands can be added in `support/commands.ts` 