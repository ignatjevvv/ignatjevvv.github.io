class Calculator {
    constructor(inputPreValue, inputTotalValue, labelPrevValue, labelCurrValue, labelDiffValue, labelCurrSum, labRate, btn) {
        this.inputPreValue = document.querySelector(inputPreValue);
        this.inputTotalValue = document.querySelector(inputTotalValue);
        this.labelPrevValue = document.querySelector(labelPrevValue);
        this.labelCurrValue = document.querySelector(labelCurrValue);
        this.labelDiffValue = document.querySelector(labelDiffValue);
        this.labelCurrSum = document.querySelector(labelCurrSum);
        this.labRate = document.querySelector(labRate);
        this.btn = document.querySelector(btn);
    }

    inputListener(className) {
        this.inputPreValue.addEventListener('input', () => {
            this.checkInputValue(this.inputPreValue);
        });

        this.inputTotalValue.addEventListener('input', () => {
            this.checkInputValue(this.inputTotalValue);
        });
    }

    checkInputValue(selectorInput) {
        let inputClass = selectorInput.parentElement.parentElement;

        if (!Number.isInteger(+selectorInput.value)) {
            inputClass.classList.add('error');
            this.clearLabelItem();
            return;
        }

        if (Math.sign(+selectorInput.value) == -1) {
            inputClass.classList.add('error');
            this.clearLabelItem();
            return;
        }

        if (+this.inputPreValue.value >= +this.inputTotalValue.value) {
            inputClass.classList.add('error');
            this.clearLabelItem();
        }

        if (this.inputTotalValue.value === '') {
            inputClass.classList.remove('error');
            this.clearLabelItem();
            return;
        }

        if (+this.inputTotalValue.value > +this.inputPreValue.value) {
            this.calculate();
            this.clearInputError();
            this.resizeLabelSum(selectorInput);
        } else {
            this.clearLabelItem();
        }

    }

    calculate() {
        this.diff = +this.inputTotalValue.value - +this.inputPreValue.value;

        if (this.inputPreValue.value.length != 0) {
            this.labelDiffValue.textContent = this.diff;
        }

        this.labelPrevValue.textContent = +this.inputPreValue.value;
        this.labelCurrValue.textContent = +this.inputTotalValue.value;
    }

    clearInputError() {
        const inputs = document.querySelectorAll('.calculator_input');

        inputs.forEach(input => {
            input.classList.remove('error');
        });
    }

    clearLabelItem() {
        // Clear label info
        let labelList = [
            this.labelPrevValue,
            this.labelCurrValue,
            this.labelDiffValue,
            this.labelCurrSum,
            this.labRate];

        labelList.forEach(item => {
            item.textContent = '0';
        });

        // Set default font-size label current sum 
        if (this.labelCurrSum.textContent.length === 1) {
            this.labelCurrSum.style.fontSize = '50px';
        }
    }

    resizeLabelSum(inputValue) {
        let px = this.labelCurrSum.style.fontSize.match(/\d/g).join('');

        switch (this.labelCurrSum.textContent.length) {
            case 7:
                this.labelCurrSum.style.fontSize = '44px';
                break;
            case 8:
                this.labelCurrSum.style.fontSize = '38px';
                break;
            case 9:
                this.labelCurrSum.style.fontSize = '34px';
                break;
            case 10:
                this.labelCurrSum.style.fontSize = '32px';
                break;
            default:
                this.labelCurrSum.style.fontSize = '50px';
        }

        inputValue.addEventListener('keydown', (e) => {
            if (e.code === 'Backspace') {
                if (inputValue.value != '' && px != 50 || inputValue.selectionStart != 0) {
                    this.labelCurrSum.style.fontSize = `${(+px + 6) + 'px'}`;
                }
            }
        });
    }

    // Save value
    btns(element, key) {
        this.btn.addEventListener('click', (e) => {
            if (+this.inputTotalValue.value > +this.inputPreValue.value || +this.inputPreValue.value === 0) {
                this.saveValueCurrent(e.target.parentNode.className, element, key);
            }
        });
    }

    saveValueCurrent(e, element, key) {
        if (e === element) {
            localStorage.setItem(key, this.inputTotalValue.value);
        }

        this.loadLocalStorege(key, this.inputPreValue);
        this.inputTotalValue.value = '';
        this.clearLabelItem();
    }

    // Local storege load data

    loadLocalStorege(key) {
        if (localStorage.getItem(key)) {
            this.inputPreValue.value = localStorage.getItem(key);
        }
    }
}

// End Class

class CalculateElectricity extends Calculator {
    calculate() {
        super.calculate();
        if (this.diff > 250) {
            this.labelCurrSum.textContent = (this.diff * 1.68).toFixed(2);
            this.labRate.textContent = '1.68';
        } else {
            this.labelCurrSum.textContent = (this.diff * 1.44).toFixed(2);
            this.labRate.textContent = '1.44';
        }
    }
}

let calcElectricity = new CalculateElectricity(
    '#elect_previous',
    '#elect_current',
    '[data-calc-display="previous"]',
    '[data-calc-display="current"]',
    '[data-calc-display="difference"]',
    '[data-calc-display="sum"]',
    '[data-calc-display="rate"]',
    '#btn'
);

calcElectricity.btns('calculator__electricity', 'electric');

// Water Calculate.

class CalculateWater extends Calculator {
    calculate() {
        super.calculate();
        this.labelCurrSum.textContent = (this.diff * 31.56).toFixed(2);
        this.labRate.textContent = '31.56';
    }
}

let calcWater = new CalculateWater(
    '#water_previous',
    '#water_current',
    '[data-calc-display="water_previous"]',
    '[data-calc-display="water_current"]',
    '[data-calc-display="water_difference"]',
    '[data-calc-display="water_sum"]',
    '[data-calc-display="water_rate"]',
    '#btn_water'
);

calcWater.btns('calculator__water', 'water');


let className = [calcElectricity, calcWater];
let keys = ['electric', 'water'];

function addListerInput() {
    className.forEach(item => {
        item.inputListener();
    });
}

function loadStorageData() {
    className.forEach((item, i) => {
        item.loadLocalStorege(keys[i]);
    });
}

addListerInput();
loadStorageData();

// VanillaTilt

VanillaTilt.init(document.querySelectorAll(".calculator__result"), {
    max: 15,
    speed: 500
});

