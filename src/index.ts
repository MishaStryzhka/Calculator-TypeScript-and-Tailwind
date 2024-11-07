let currentInput: string = '';

const refs = {
    buttons: document.querySelector('.buttons') as HTMLDivElement | null,
    display: document.getElementById('display') as HTMLDivElement | null,
};

refs?.buttons?.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;

    if (target?.value) {
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

function appendNumber(number: string): void {
    if (currentInput === '0') currentInput = '';
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator: string): void {
    if (currentInput === '') return;
    currentInput += ` ${operator} `;
    updateDisplay();
}

function appendDot(): void {
    const lastNumber = currentInput.split(/[\+\-\*\/]/).pop() || '';

    if (!lastNumber.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay(): void {
    currentInput = '';
    updateDisplay();
}

function calculate(): void {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function percentage(): void {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function toggleSign(): void {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function updateDisplay(): void {
    if (refs.display) refs.display.innerText = currentInput || '0';
}
