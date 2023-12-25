const calc = require("./calc");

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