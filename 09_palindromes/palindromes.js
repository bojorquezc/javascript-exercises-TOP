const palindromes = function (phrase) {
    reversedPhrase = phrase.split('').reverse().join('');
    reversedLower = reversedPhrase.toLowerCase().replace(/[^a-zA-Z]/g, '');
    regularPhraseLower = phrase.toLowerCase().replace(/[^a-zA-Z]/g, '');

    if (regularPhraseLower == reversedLower) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
