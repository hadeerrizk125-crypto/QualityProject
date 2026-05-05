const isVowel = require('./checkVowel');
function validateChar(char) {
    if (!char || char.length !== 1 || !/[a-zA-Z]/.test(char)) {
        console.log("Invalid character!");
        return;
    }
    if (isVowel(char)) {
        console.log("Valid: It's a vowel");
    } else {
        console.log("INvalid: It's a consonant");
    }
}
validateChar(process.argv[2]);
/////node checkvoweltest.js