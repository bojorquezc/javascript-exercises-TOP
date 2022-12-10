const repeatString = function(string, num) {
    let repeated = '';
    if(num < 0) {
        return 'ERROR';
    }
    for(let i = 1; i <= num; i++) {
        repeated += string.toString(); 
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
