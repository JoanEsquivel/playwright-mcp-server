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
├── cypress.env.json   # Environment variables (not in git)
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

The test report will be generated in `cypress/reports/html/index.html`

## Features

- TypeScript support
- Page Object Model pattern
- Custom commands for common actions
- Detailed logging using custom Cypress task
- Mochawesome HTML reporter
- GitHub Actions integration
- GitHub Pages for test reports 