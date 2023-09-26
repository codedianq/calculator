//global variables
let previousValue = '';
let currentValue = '';
let operator;

// Create a new function named operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate() {
    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    console.log(previousValue);
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

// Calculate
const isEqualTo = document.querySelector('#equals-btn');

isEqualTo.addEventListener('click', () => {
    operate();
})



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