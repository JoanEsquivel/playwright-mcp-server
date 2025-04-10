# SauceDemo Cypress Tests

This project contains automated tests for the [SauceDemo](https://www.saucedemo.com) website using Cypress with TypeScript.

## Features

- Written in TypeScript
- Page Object Model pattern
- Custom commands
- Environment configuration
- Detailed logging
- Mochawesome reporting
- GitHub Actions integration
- GitHub Pages for test reports

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd cypress-saucedemo

# Install dependencies
npm install
```

## Running Tests

```bash
# Run tests in headless mode
npm run cy:run

# Open Cypress Test Runner
npm run cy:open

# Run linting
npm run lint
```

## Project Structure

```
cypress-saucedemo/
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       └── cypress.yml         # CI workflow configuration
├── cypress/
│   ├── e2e/                    # Test files
│   │   └── login.cy.ts         # Login tests
│   ├── fixtures/               # Test data
│   │   └── testData.json       # Common test data
│   ├── pages/                  # Page Object Models
│   │   ├── BasePage.ts         # Base page with common methods
│   │   ├── LoginPage.ts        # Login page object
│   │   └── InventoryPage.ts    # Inventory page object
│   ├── reports/                # Generated test reports (git ignored)
│   └── support/                # Support files
│       ├── commands.ts         # Custom commands
│       └── e2e.ts              # e2e support file
├── cypress.config.ts           # Cypress configuration
├── cypress.env.json            # Environment variables (git ignored)
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Test Reports

After running the tests, reports are generated in the `cypress/reports` directory. When tests are run in the CI pipeline, the reports are published to GitHub Pages.

## Environment Variables

Sensitive data like credentials are stored in `cypress.env.json` which is git-ignored for security. Create this file locally with the following structure:

```json
{
  "users": {
    "standard": "standard_user",
    "locked": "locked_out_user",
    "problem": "problem_user",
    "performance": "performance_glitch_user"
  },
  "password": "secret_sauce"
}
```

## CI/CD

The project uses GitHub Actions for continuous integration. On each push to the `master` branch, the workflow:

1. Installs dependencies
2. Runs Cypress tests
3. Uploads screenshots on failure
4. Generates and publishes test reports
5. Deploys the report to GitHub Pages 