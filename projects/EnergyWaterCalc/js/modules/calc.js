function calc() {
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

            this.loadLocalStorage(key, this.inputPreValue);
            this.inputTotalValue.value = '';
            this.clearLabelItem();
        }

        // Local Storage load data

        loadLocalStorage(key) {
            if (localStorage.getItem(key)) {
                this.inputPreValue.value = localStorage.getItem(key);
            }
        }
    }

    return Calculator;
}

module.exports = calc;