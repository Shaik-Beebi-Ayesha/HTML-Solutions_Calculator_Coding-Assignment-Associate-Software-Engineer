function appendToDisplay(value) {
    document.querySelector('.input').value += value;
}

function clearDisplay() {
    document.querySelector('.input').value = '';
}

function calculateResult() {
    try {
        document.querySelector('.input').value = eval(document.querySelector('.input').value);
    } catch (error) {
        document.querySelectord('.input').value = 'Error';
    }
}