# Cypress MCP Framework

This project contains automated tests for the Sauce Demo website using Cypress with TypeScript and Page Object Model pattern.

## Project Structure

```
cypress/
  ├── e2e/           # Test files
  ├── fixtures/      # Test data
  ├── pages/         # Page Object Model classes
  └── support/       # Support files and commands
```

## Prerequisites

- Node.js (v20 or later)
- npm

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

The project uses `cypress.env.json` for environment-specific variables. Create this file with the following content:

```json
{
  "standardUser": "standard_user",
  "lockedOutUser": "locked_out_user",
  "password": "secret_sauce"
}
```

## Running Tests

To open Cypress Test Runner:
```bash
npm run test:open
```

To run tests in headless mode:
```bash
npm test
```

To run tests in specific browsers:
```bash
npm run test:chrome
npm run test:firefox
```

## GitHub Actions

The project includes a GitHub Actions workflow that runs the tests automatically on push and pull requests.

## Test Cases

1. Valid Login
   - Tests successful login with standard user credentials
   - Verifies navigation to inventory page

2. Locked Out User
   - Tests login attempt with locked out user
   - Verifies error message display 