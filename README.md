# Sauce Demo Cypress Tests

This repository contains automated tests for the Sauce Demo website using Cypress with TypeScript.

## Features

- TypeScript for type safety
- Page Object Model (POM) design pattern
- Custom Cypress commands
- Mochawesome reporting
- GitHub Actions integration
- Environment variables for credentials

## Project Structure

```
├── .github/workflows     # GitHub Actions workflow files
├── cypress               # Cypress test files
│   ├── e2e               # Test specifications
│   ├── fixtures          # Test data
│   ├── support           # Support files
│   │   ├── commands      # Custom commands
│   │   ├── pages         # Page Object Models
├── .gitignore            # Git ignore file
├── cypress.config.ts     # Cypress configuration
├── cypress.env.json      # Environment variables (gitignored)
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `cypress.env.json` file in the root directory with the following content:
   ```json
   {
     "standard_username": "standard_user",
     "locked_out_username": "locked_out_user",
     "password": "secret_sauce"
   }
   ```

## Running Tests

To run tests in the Cypress Test Runner:

```
npm run cypress:open
```

To run tests in headless mode:

```
npm run cypress:run
```

To run tests in a specific browser:

```
npm run cypress:run:chrome
```

## Reports

After running tests in headless mode, the Mochawesome report will be generated in the `cypress/reports` directory.

## CI/CD

The repository is configured with GitHub Actions to run tests on every push to the master branch.
The workflow will:
1. Install dependencies
2. Create the necessary environment variables
3. Run Cypress tests in headless mode
4. Upload the test reports as artifacts 