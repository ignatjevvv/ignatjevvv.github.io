const calc = require("./calc");

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