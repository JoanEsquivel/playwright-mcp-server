Use the Playwright MCP Server to navigate to https://www.saucedemo.com. All browser automation must be routed through the MCP Server. Do not simulate interactions or bypass the MCP in any part of the flow.

On the login page, execute and validate the following two scenarios:

Scenario 1: Valid Login
Scenario 2: Locked Out User
Scan the website to retrieve the credentials for both scenarios.

After both scenarios are executed and validated:

Close the browser.
Allow the MCP Server to complete the code generation.
Use the code found in the temp_codegen folder as a reference.
Transpile the test code to a Cypress framework using TypeScript.
Organize the Cypress project inside a parent folder named cypress-mcp-framework. Use the Page Object Model structure. Store reusable data in the fixtures folder. Save environment-specific credentials in a cypress.env.json file.

Under the parent folder cypress-mcp-framework add a README.md file that documents how to run the tests and describes the project structure.

Under the parent folder cypress-mcp-framework create a .gitignore file that excludes node_modules and cypress.env.json.

Under the parent folder cypress-mcp-framework set up a GitHub Actions workflow to install dependencies and run the Cypress tests.