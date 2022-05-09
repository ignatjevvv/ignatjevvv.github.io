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
                this.getInputValue();
            });

            this.inputTotalValue.addEventListener('input', () => {
                this.getInputValue();
            });
        }

        getInputValue() {
            let inputClass = this.inputTotalValue.parentElement.parentElement;

            this.labelCurrValue.textContent = +this.inputTotalValue.value;
            this.labelPrevValue.textContent = +this.inputPreValue.value;
            this.resizeLabelSum(this.inputPreValue, this.labelCurrSum);

            if (+this.inputTotalValue.value > +this.inputPreValue.value) {
                inputClass.classList.remove('error');
                this.calculate();
                this.resizeLabelSum(this.inputPreValue, this.labelCurrSum);
            } else {

                if (this.inputTotalValue.value.length === 0) {
                    inputClass.classList.remove('error');
                } else {
                    inputClass.classList.add('error');
                }

                this.clearLabelItem();
            }
        }

        calculate() {
            this.diff = +this.inputTotalValue.value - +this.inputPreValue.value;

            if (this.inputPreValue.value.length != 0) {
                this.labelDiffValue.textContent = this.diff;
            }
        }

        clearLabelItem() {
            let labelList = [
                this.labelPrevValue,
                this.labelCurrValue,
                this.labelDiffValue,
                this.labelCurrSum,
                this.labRate];

            labelList.forEach(item => {
                item.textContent = '0';
            });

            if (this.labelCurrSum.textContent.length === 1) {
                this.labelCurrSum.style.fontSize = '50px';
            }
        }

        resizeLabelSum(inputValue, labelSelector) {
            let px = labelSelector.style.fontSize.match(/\d/g).join('');

            switch (labelSelector.textContent.length) {
                case 7:
                    labelSelector.style.fontSize = '44px';
                    break;
                case 8:
                    labelSelector.style.fontSize = '38px';
                    break;
                case 9:
                    labelSelector.style.fontSize = '34px';
                    break;
                case 10:
                    labelSelector.style.fontSize = '32px';
                    break;
                default:
                    labelSelector.style.fontSize = '50px';
            }

            inputValue.addEventListener('keydown', (e) => {
                if (e.code === 'Backspace') {
                    if (inputValue.value != '' && px != 50 || inputValue.selectionStart != 0) {
                        labelSelector.style.fontSize = `${(+px + 6) + 'px'}`;
                    }
                }
            });
        }

        // Save value
        btns(element, key) {
            this.btn.addEventListener('click', (e) => {
                if (+this.inputTotalValue.value > +this.inputPreValue.value || +this.inputPreValue.value == 0) {
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

    return Calculator;

}

module.exports = calc;