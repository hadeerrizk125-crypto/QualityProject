# QualityProject

This repository contains a small Node.js quality automation project.

## Project Overview

- `checkVowel.js` - function to determine whether a single character is a vowel.
- `checkVowel.test.js` - Jest test suite for the vowel checker.
- `checkvoweltest.js` - simple command-line validator that prints whether a provided character is a vowel or consonant.
- `testAmazon.js` - Selenium WebDriver script that opens Amazon.com, searches for `iphone`, and verifies search results load.

## Prerequisites

- Node.js installed
- Chrome browser installed
- `npm` available from the command line

## Install

```bash
npm install
```

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
