# SauceDemo Cypress Tests

This project contains Cypress end-to-end tests for the SauceDemo website using TypeScript and the Page Object Model pattern.

## Project Structure

```
├── cypress/
│   ├── e2e/                 # Test files
│   ├── fixtures/            # Test data
│   ├── pages/               # Page Object Model files
│   ├── support/             # Custom commands and utilities
│   └── tsconfig.json        # TypeScript configuration
├── cypress.config.ts        # Cypress configuration
├── cypress.env.json         # Environment variables (not committed to git)
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `cypress.env.json` file with the following content:
   ```json
   {
     "users": {
       "standard": {
         "username": "standard_user",
         "password": "secret_sauce"
       },
       "locked": {
         "username": "locked_out_user",
         "password": "secret_sauce"
       }
     }
   }
   ```

## Running Tests

### Headless Mode

To run tests in headless mode:

```
npm run cy:run
```

### Interactive Mode

To open Cypress in interactive mode:

```
npm run cy:open
```

## Test Cases

1. **Valid Login**: Tests successful login using standard_user
2. **Locked Out User**: Tests error handling with locked_out_user

## Logging

The tests include a custom task for logging which displays detailed information in the terminal during test runs. 