const fibonacci = function(index) {
    let a = 1; 
    let b = 1; 
    let c = 0;
    let indexNumber = Number(index);

    if (indexNumber == 1 || indexNumber == 2) {
        return 1;
    } else if (indexNumber == 0) {
        return 0;
    } else if (indexNumber < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < indexNumber-2; i++) {
            c = a + b;
            b = a;
            a = c;
        }
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
