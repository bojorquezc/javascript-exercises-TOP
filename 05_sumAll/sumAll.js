const sumAll = function (minNumber, maxNumber) {
    const numberArray = [];

    // Inverse the values to add to array if minNumber is greater than maxNumber
    if (minNumber > maxNumber) {
        for (let i = maxNumber; i <= minNumber; i++) {
            numberArray.push(i);
        }
    }
    // Check if values are not negative
    if (minNumber < 0 || maxNumber < 0) {
        return 'ERROR';
    }

    // Check if argument is a number
    if (typeof (minNumber) != 'number' || typeof (maxNumber) != 'number') {
        return 'ERROR';
    }

    // Create array from min and max numbers
    for (let i = minNumber; i <= maxNumber; i++) {
        numberArray.push(i);
    }

    // Iterate and sum the array values
    let sumArray = 0;
    for (let index = 0; index < numberArray.length; index++) {
        sumArray += Number(numberArray[index]);
    }
    return sumArray;
};
// Do not edit below this line
module.exports = sumAll;
