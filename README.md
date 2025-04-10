# SauceDemo Cypress Test Automation

This project contains automated tests for the [SauceDemo](https://www.saucedemo.com) website using Cypress with TypeScript.

## Test Scenarios

The following test scenarios are automated:

1. **Valid Login Scenario** - Verify that a user can successfully log in with valid credentials
2. **Locked Out User Scenario** - Verify that an appropriate error message is displayed when a locked out user attempts to log in

## Project Structure

```
├── .github/workflows       # GitHub Actions workflow files
├── cypress/                # Cypress test files
│   ├── e2e/                # Test specs
│   ├── fixtures/           # Test data
│   ├── pages/              # Page objects
│   └── support/            # Support files and custom commands
├── .gitignore              # Git ignore file
├── cypress.config.ts       # Cypress configuration
├── cypress.env.json        # Environment variables (not committed to Git)
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Page Object Model

The tests use the Page Object Model pattern to create a layer of abstraction between the test code and the UI. Page objects are in the `cypress/pages` directory.

## Installation

1. Clone the repository
2. Install dependencies:

```bash
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

## Running the Tests

### Headless Mode

To run tests in headless mode:

```bash
npm run cy:run
```

### Interactive Mode

To open Cypress in interactive mode:

```bash
npm run cy:open
```

## CI/CD

This project includes GitHub Actions workflows for continuous integration. Tests are automatically run on push to the master branch and on pull requests to the master branch. 