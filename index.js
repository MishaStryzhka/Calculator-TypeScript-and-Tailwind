var _a;
let currentInput = '';
const refs = {
    buttons: document.querySelector('.buttons'),
    display: document.getElementById('display'),
};
(_a = refs === null || refs === void 0 ? void 0 : refs.buttons) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    const target = e.target;
    if (target === null || target === void 0 ? void 0 : target.value) {
        switch (target.value) {
            case 'appendNumber':
                appendNumber(target.outerText);
                break;
            case 'appendOperator':
                appendOperator(target.outerText);
                break;
            case 'calculate':
                calculate();
                break;
            case 'percentage':
                percentage();
                break;
            case 'clearDisplay':
                clearDisplay();
                break;
            case 'toggleSign':
                toggleSign();
                break;
            case 'appendDot':
                appendDot();
                break;
            default:
                break;
        }
    }
});
function appendNumber(number) {
    if (currentInput === '0')
        currentInput = '';
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator) {
    if (currentInput === '')
        return;
    currentInput += ` ${operator} `;
    updateDisplay();
}
function appendDot() {
    const lastNumber = currentInput.split(/[\+\-\*\/]/).pop() || '';
    if (!lastNumber.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    }
    catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}
function percentage() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}
function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}
function updateDisplay() {
    if (refs.display)
        refs.display.innerText = currentInput || '0';
}
//# sourceMappingURL=index.js.map