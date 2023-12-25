/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/elect.js":
/*!*****************************!*\
  !*** ./js/modules/elect.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const calc = __webpack_require__(/*! ./calc */ "./js/modules/calc.js");

function elect() {
    class CalculateElectricity extends calc() {
        calculate() {
            super.calculate();
            if (this.diff) {
                this.labelCurrSum.textContent = (this.diff * 2.64).toFixed(2);
                this.labRate.textContent = '2.64';
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

    calcElectricity.btns('calculator', 'electric');
    calcElectricity.inputListener();
    calcElectricity.loadLocalStorage('electric');
    return CalculateElectricity;
}

module.exports = elect;

/***/ }),

/***/ "./js/modules/water.js":
/*!*****************************!*\
  !*** ./js/modules/water.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const calc = __webpack_require__(/*! ./calc */ "./js/modules/calc.js");

function water() {
    class CalculateWater extends calc() {
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
    
    calcWater.btns('calculator', 'water');
    calcWater.inputListener();
    calcWater.loadLocalStorage('water');
}

module.exports = water;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
          elect = __webpack_require__(/*! ./modules/elect */ "./js/modules/elect.js"),
          water = __webpack_require__(/*! ./modules/water */ "./js/modules/water.js");

          calc();
          elect();
          water();

          // VanillaTilt

        const calcCard = document.querySelectorAll('.calculator__result');
        
        calcCard.forEach(card => (
            card.addEventListener('mouseover', (e) => {
                card.classList.add('transform');
                // if (card.parentNode.classList[0] === 'calculator') {
                //     card.classList.add('transform');
                // } 
            })
        ));

        calcCard.forEach(card => {
            card.addEventListener('mouseout', () => {
                card.classList.remove('transform');
                // if (card.parentNode.classList[0] === 'calculator'){
                //     card.classList.remove('transform');
                // }
            });
        });
        
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map