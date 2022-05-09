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
    calcElectricity.inputListener();
    calcElectricity.loadLocalStorege('electric');
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
    
    calcWater.btns('calculator__water', 'water');
    calcWater.inputListener();
    calcWater.loadLocalStorege('water');
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
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map