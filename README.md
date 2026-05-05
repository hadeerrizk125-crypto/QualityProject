# Software Quality Assurance & Automation Project 🧪

This repository demonstrates professional testing techniques, ranging from fundamental logic verification to complex end-to-end web automation. It serves as a showcase of quality standards in a Node.js environment.

## 🛠 Tech Stack
* **Testing Framework:** Jest (Unit Testing)
* **Automation Tool:** Selenium WebDriver (E2E Testing)
* **Runtime Environment:** Node.js
* **Browser:** Google Chrome

## 🔍 Project Overview & Features
* **Unit Testing (Logic Verification):** Uses `checkVowel.test.js` to ensure the core logic of vowel detection is 100% accurate across various cases.
* **E2E Automation (Web Testing):** A robust script (`testAmazon.js`) that simulates a real user journey: launching the browser, navigating to Amazon, performing a search for 'iphone', and verifying results.
* **CLI Utility:** A command-line tool (`checkvoweltest.js`) for quick manual validation of characters.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- Chrome browser and matching Chromedriver.

### Installation
1. Clone the repository.
2. Install dependencies (Note: `node_modules` are git-ignored to keep the repo clean):
   ```bash
   npm install

## Run the unit test

```bash
npm test
```

This executes the Jest test defined in `checkVowel.test.js`.

## Run the vowel checker CLI

```bash
node checkvoweltest.js a
```

Replace `a` with any single alphabet character.

## Run the Amazon Selenium test

```bash
node testAmazon.js
```

### Notes for Selenium

- The test uses Chrome and `chromedriver`.
- If Chrome or Chromedriver versions are mismatched, update the driver or browser accordingly.
- The script waits for the Amazon search box and search results to load, then closes the browser after a short delay.

## Files

- `package.json` - project metadata and npm scripts
- `checkVowel.js` - vowel detection logic
- `checkVowel.test.js` - Jest unit test
- `checkvoweltest.js` - command-line validation utility
- `testAmazon.js` - Selenium automation script

## License

This project is released under ISC.
