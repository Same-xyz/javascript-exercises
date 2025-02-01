const palindromes = function (words) {
    //My Imperative Solution
    // let reversed = '';
    // const cleanedWords = words.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    // for (let i = cleanedWords.length - 1; i >= 0; i--) {
    //     reversed += cleanedWords[i]
    // }
    // return cleanedWords === reversed;
    //Actual Functional Solution
    //We convert the string to lower case to make the comparison case-insensitive
    //We remove all non-alphanumeric characters to make the comparison ignore punctuation and spaces
    //We split the cleaned string into an array of individual characters
    //We reverse the array of characters
    //We join the reversed array back into a single string
    //We compare the reversed string to the cleaned original string
    cleanWords = words.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return words
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, '')
        .split('')
        .reverse()
        .join('') === cleanWords;
};

// Do not edit below this line
module.exports = palindromes;
