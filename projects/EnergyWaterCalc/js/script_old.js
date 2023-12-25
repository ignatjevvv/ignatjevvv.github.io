'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const previousValue = document.querySelector('#elect_previous'),
          inputTotalValue = document.querySelector('#elect_current'),
          labelCurrentSum = document.querySelector('[data-calc-display="sum"]'),
          labelPreviousValue = document.querySelector('[data-calc-display="previous"]'),
          labelCurrentValue = document.querySelector('[data-calc-display="current"]'),
          labelDifferenceValue = document.querySelector('[data-calc-display="difference"]'),
          labelRate = document.querySelector('[data-calc-display="rate"]');

    previousValue.addEventListener('input', updateItemCalc);
    inputTotalValue.addEventListener('input', updateItemCalc);

    const labelList = [labelCurrentSum, labelDifferenceValue, labelPreviousValue, labelCurrentValue, labelRate];

    function updateItemCalc() {
        if (+previousValue.value < +inputTotalValue.value) {
            inputTotalValue.parentElement.parentElement.classList.remove('error');
            labelPreviousValue.textContent = +previousValue.value;
            labelCurrentValue.textContent = +inputTotalValue.value;
            labelDifferenceValue.textContent = 0;
            calculate();
        } else {
            inputTotalValue.parentElement.parentElement.classList.add('error');
            return clearItemLabel(labelList);
        }
    }

    function calculate() {
        let difference = +inputTotalValue.value - +previousValue.value;

        if (difference > 250) {
            labelCurrentSum.textContent = (difference * 1.68).toFixed(2);
            labelRate.textContent = '1.68';
        } else {
            labelCurrentSum.textContent = (difference * 1.44).toFixed(2);
            labelRate.textContent = '1.44';
        }

        if (previousValue.value.length != 0) {
            labelDifferenceValue.textContent = difference;
        }

        resizeLabelSum(inputTotalValue, labelCurrentSum);
    }

    // Button

    function say(element) {
        if (element === 'calculator__electricity') {
           saveValueCurrent('electric', inputTotalValue.value);
        }
        if (element === 'calculator__water') {
            console.log('Это вода');
        }
    }

    const btn = document.querySelectorAll('.btn');

    btn.forEach(item => {
        item.addEventListener('click', () => {
            return say(item.parentElement.className);
        });
    }); 
    
  

    // btn.addEventListener('click', () => {
    //     // if (previousValue.value === '') {
    //     //     localStorage.removeItem('electric');
    //     // }

    //     // if (+inputTotalValue.value > +previousValue.value) {
    //     //     saveValueCurrent('electric', inputTotalValue.value);
    //     //     loadLocalStorege('electric', previousValue);
    //     //     clearItemLabel(labelList);
    //     //     inputTotalValue.value = '';
    //     // }
    //     return console.log(this);
    // });

    loadLocalStorege('electric', previousValue);
    // ***********************************************//

    // Water calculate

    // const labelCurrentSumWater = document.querySelector('[data-calc-display="water_sum"]'),
    //     labelDifferenceValueWater = document.querySelector('[data-calc-display="water_difference"]'),
    //     labelPreviousValueWater = document.querySelector('[data-calc-display="water_previous"]'),
    //     labelCurrentValueWater = document.querySelector('[data-calc-display="water_current"]'),
    //     labelRateWater = document.querySelector('[data-calc-display="water_rate"]');


    // const labelListWater = [labelCurrentSumWater, labelDifferenceValueWater, labelPreviousValueWater,
    //     labelCurrentValueWater, labelRateWater];


    // const previousValueWater = document.querySelector('#water_previous'),
    //     totalValueWater = document.querySelector('#water_current');

    // previousValueWater.addEventListener('input', updateItemCalcWater);
    // totalValueWater.addEventListener('input', updateItemCalcWater);

    // function updateItemCalcWater() {
    //     if (+previousValueWater.value < +totalValueWater.value) {
    //         totalValueWater.parentElement.parentElement.style.border = '';
    //         labelPreviousValueWater.textContent = +previousValueWater.value;
    //         labelCurrentValueWater.textContent = +totalValueWater.value;
    //         calculateWater(previousValueWater, totalValueWater);
    //     } else {
    //         totalValueWater.parentElement.parentElement.style.border = '1px solid #FF6363';
    //         return clearItemLabel(labelListWater);
    //     }
    // }

    // function calculateWater(prevValue, totalCurrent) {
    //     let difference = +totalCurrent.value - +prevValue.value;

    //     if (difference) {
    //         if (previousValueWater.value.length != 0) {
    //             labelDifferenceValueWater.textContent = +difference;
    //         } else {
    //             labelDifferenceValueWater.textContent = 0;
    //         }

    //         labelCurrentSumWater.textContent = (difference * 31.56).toFixed(2);
    //         labelRateWater.textContent = '31.56';
    //     }

    //     resizeLabelSum(totalValueWater, labelCurrentSumWater);
    // }

    // // Button
    // const btnWaterSave = document.querySelector('#water_btn');

    // btnWaterSave.addEventListener('click', () => {
    //     if (previousValueWater.value === '') {
    //         localStorage.removeItem('water');
    //     }

    //     if (+totalValueWater.value > +previousValueWater.value) {
    //         saveValueCurrent('water', totalValueWater.value);
    //         clearItemLabel(labelListWater);
    //         loadLocalStorege('water', previousValueWater);
    //         totalValueWater.value = '';
    //     }
    // });



    // Save value

    function saveValueCurrent(key, current) {
        localStorage.setItem(key, current);
    }

    // Local storege load data

    function loadLocalStorege(key, input) {
        if (localStorage.getItem(key)) {
            input.value = localStorage.getItem(key);
        }
    }

    // Clear items lebel 

    function clearItemLabel(labels) {
        labels.forEach(label => {
            label.textContent = '0';
        });

        if (inputTotalValue.value.length === 0) {
            inputTotalValue.parentElement.parentElement.classList.remove('error');
        }

        // if (totalValueWater.value.length === 0) {
        //     totalValueWater.parentElement.parentElement.style.border = '';
        // }

        if (labelCurrentSum.textContent.length === 1) {
            labelCurrentSum.style.fontSize = '50px';
        }

        // if (labelCurrentSumWater.textContent.length === 1) {
        //     labelCurrentSumWater.style.fontSize = '50px';
        // }

    }

    // Resizing font label current sum

    function resizeLabelSum(inputValue, labelSelector) {
        let px = labelSelector.style.fontSize.match(/\d/g).join('');

        // if (labelSelector.textContent.length >= 7 && px != 32) {
        //     labelSelector.style.fontSize = `${(+px - 6) + 'px'}`;
        // }

        switch (labelSelector.textContent.length) {
            case 7:
                labelSelector.style.fontSize = '44px';
                break;
            case 8:
                labelSelector.style.fontSize = '38px';
                break;
            case 9:
            case 10:
                labelSelector.style.fontSize = '32px';
                break;
            default:
                labelSelector.style.fontSize = '50px';
        }

        inputValue.addEventListener('keydown', (e) => {
            if (e.code === 'Backspace') {
                if (inputValue.value != '' && px != 50 && inputValue.selectionStart != 0) {
                    labelSelector.style.fontSize = `${(+px + 6) + 'px'}`;
                }
            }
        });
    }

  
    // loadLocalStorege('water', previousValueWater);

    // VanillaTilt

    // VanillaTilt.init(document.querySelectorAll(".calculator__result"), {
    //     max: 15,
    //     speed: 500
    // });

    // //It also supports NodeList
    // VanillaTilt.init(document.querySelectorAll(".calculator__result"));

});