const reverseString = function(string) {
    const stringToArray = string.split("");
    const reversedArray = stringToArray.reverse();
    const arrayToString = reversedArray.join("");
    return arrayToString;
};

// Do not edit below this line
module.exports = reverseString;
