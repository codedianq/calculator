//global variables
let x = 0;
let y = 0;
let operator;

// Create functions for add, subtract, multiply, and divide.
function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

// Create a new function named operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operation, x, y) {
    if (operation === 'addition') {
        return addition(x, y);
    }
    if (operation === 'subtraction') {
        return subtraction(x, y);
    }
    if (operation === 'multiplication') {
        return multiplication(x, y);
    }
    if (operation === 'division') {
        return division(x, y);
    }else {
        return ('Please choose: addition, subtraction, multiplication, or division')
    }
}

console.log(operate('division', 25, 5));
