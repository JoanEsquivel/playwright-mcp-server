# Cypress MCP Framework

This project contains automated tests for the SauceDemo website using Cypress with TypeScript, implementing the Page Object Model pattern.

## Project Structure

```
cypress-mcp-framework/
├── cypress/
│   ├── e2e/           # Test files
│   ├── fixtures/      # Test data
│   ├── support/       # Custom commands and global configuration
│   └── pages/         # Page Object Model classes
├── cypress.config.ts  # Cypress configuration
├── package.json      # Project dependencies
└── tsconfig.json    # TypeScript configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd cypress-mcp-framework
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

The project uses `cypress.env.json` for environment-specific credentials. Create this file in the project root (it's gitignored):

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
npm run test
```

To open Cypress Test Runner:
```bash
npm run cypress:open
```

## Test Reports

The project uses Mochawesome for generating test reports. After test execution, you can find the reports in:
```
cypress/reports/html/index.html
```

## Custom Commands

The framework includes custom logging commands that provide detailed information about test actions and assertions in the terminal. These can be found in `cypress/support/commands.ts`. 