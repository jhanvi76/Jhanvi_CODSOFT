let screen = document.getElementById('screen');
let result = 0;
let currentInput = '';
let operator = '';
function appendToScreen(value) {
    if (screen.textContent === '0') {
        screen.textContent = '';
    }
    screen.textContent += value;
    currentInput += value;
}
function clearScreen() {
    screen.textContent = '0';
    result = 0;
    currentInput = '';
    operator = '';
}
function calculate() {
    if (currentInput.includes('+')) {
        let numbers = currentInput.split('+').map(Number);
        result = numbers.reduce((a, b) => a + b, 0);
    } else if (currentInput.includes('-')) {
        let numbers = currentInput.split('-').map(Number);
        result = numbers.reduce((a, b) => a - b);
    } else if (currentInput.includes('*')) {
        let numbers = currentInput.split('*').map(Number);
        result = numbers.reduce((a, b) => a * b, 1);
    } else if (currentInput.includes('/')) {
        let numbers = currentInput.split('/').map(Number);
        result = numbers.reduce((a, b) => a / b);
    }
    screen.textContent = result;
    currentInput = result.toString();
}
