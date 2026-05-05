const isVowel = require('./checkVowel');

test('check if letter is vowel or consonant', () => {
    expect(isVowel('a')).toBe(true);
    expect(isVowel('E')).toBe(true);
    expect(isVowel('b')).toBe(false);
    expect(isVowel('Z')).toBe(false);
});
//npm test to run the task
