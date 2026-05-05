function isVowel(char) {
    char = char.toLowerCase(); 
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}
module.exports = isVowel;
