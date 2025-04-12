let displayValue = '';

// Function to update the display
function updateDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

// Function to perform backspace operation
function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}