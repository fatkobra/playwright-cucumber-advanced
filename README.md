#  Playwright Cucumber BDD Testing Framework

A robust UI testing setup using **Playwright** with **Cucumber-style BDD** via `playwright-bdd`.

---

##  Project Structure
```
.
├── cucumber-report/ # HTML Cucumber reports
├── playwright-report/ # Playwright traces and HTML reports
├── test-results/ # Debug logs and error contexts
├── src/
│ ├── features/ # .feature BDD files
│ ├── step-definitions/ # Step definitions for features
│ ├── pages/ # Page Object Models (POM)
│ └── utils/
│ └── tools/ # Custom utilities like browser version logging
├── playwright.config.ts # Playwright + BDD configuration
├── package.json # Project dependencies and scripts
└── tsconfig.json # TypeScript config
```

---

##  Setup & Installation

```bash
# Install dependencies
npm install

# Running the Tests
npm test


# Playwright Report
bash
npx playwright show-report

# Cucumber HTML Report
bash
npm run show-report
Starts a local server at http://localhost:8080 and opens the report.

# Make sure http-server is installed:

bash
npm install --save-dev http-server


# Notes
Configured in playwright.config.ts using defineBddConfig().

.env is supported via dotenv for test config like APP_URL.
