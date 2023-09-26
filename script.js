//global variables
let previousValue = '';
let currentValue = '';
let operator;

// Create functions for add, subtract, multiply, and divide.
function addition(num1, num2) {
    let sumValue = (num1 + num2);
    return sumValue;
}

function subtraction(num1, num2) {
    let differenceValue = (num1 - num2);
    return differenceValue;
}

function multiplication(num1, num2) {
    let productValue = (num1 * num2);
    return productValue
}

function division(num1, num2) {
    let quotientValue = (num1 / num2);
    return quotientValue;
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

// Create the functions that populate the display when you click the number buttons.
const numBtn = document.querySelectorAll('.number');
const currentScreen = document.querySelector('.current-screen');
const previousScreen = document.querySelector('.previous-screen');

numBtn.forEach((number) => number.addEventListener('click', (e) => {
    outputNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}))

function outputNumber(num) {
    if(currentValue.length <= 10) {
        currentValue += num
    }
}

// Operator buttons
const operators = document.querySelectorAll('.operator');

operators.forEach((op) => op.addEventListener('click', (e) => {
    outputOperator(e.target.textContent);
    previousScreen.textContent = `${previousValue} ${operator}`;
    currentScreen.textContent = currentValue;
}))

function outputOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

// Clear all button
const deleteBtn = document.querySelector('.delete');
const deleteAllBtn = document.querySelector('.delete-all');

deleteAllBtn.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = previousValue;
    currentScreen.textContent = currentValue;
})