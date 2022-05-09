const calc = require("./calc");

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