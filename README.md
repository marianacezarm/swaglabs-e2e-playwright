# Swag Labs E2E Tests

Small automation project created to practice modern E2E test automation using Playwright and TypeScript.

The project focuses on:

- clean test organization
- Page Object Model (POM)
- reusable test data
- positive and negative scenarios
- maintainable automation structure

---

# Stack

- Playwright
- TypeScript
- Node.js
- Prettier

---

# Project Structure

```text
.
├── constants/
├── pages/
├── payloads/
├── tests/
│   └── login/
└── README.md
```

## Folder Overview

### `pages/`

Contains page objects, locators, actions and assertions.

### `payloads/`

Reusable test data and user credentials.

### `constants/`

Shared constants such as error messages.

### `tests/`

Test scenarios and specs.

---

# Implemented Scenarios

## Positive Scenarios

- Successful login with standard user

## Negative Scenarios

- Invalid username
- Invalid password
- Invalid username and password

---

# Features Implemented

- Page Object Model (POM)
- Data-driven tests
- Shared error message constants
- Reusable payload factories
- Prettier formatting
- TypeScript support

---

# Running the Project

## Install dependencies

```bash
npm install
```

## Run all tests

```bash
npx playwright test
```

## Run tests with browser visible

```bash
npx playwright test --headed
```

## Run a specific test file

```bash
npx playwright test tests/login/login.spec.ts
```

## Run tests by name

```bash
npx playwright test -g "invalid username"
```

## Open Playwright UI mode

```bash
npx playwright test --ui
```

---

# Formatting

Format the project with Prettier:

```bash
npx prettier . --write
```

---

# Commit Convention

Examples:

```text
feat: add negative login scenarios
refactor: improve login error assertions
docs: update README
chore: configure prettier
```

---

# Application Under Test

Swag Labs:
https://www.saucedemo.com/
