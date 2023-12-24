document.addEventListener('DOMContentLoaded', () => {
    let totalSumLabel = document.querySelector('.home__data-accumulated'),
        remainingAmountLabel = document.querySelector('.home__data-left'),
        finishSumLabel = document.querySelector('.home__data-finish'),
        cashInput = document.getElementById('cashInput'),
        progressLine = document.getElementById('progressLine'),
        usdLabel = document.querySelector('.home__data-usd'),
        rateSellUsd = document.querySelector('.home__data-rate-sell');

    let progressBar = {

        totalSum: 0,
        remainingAmount: 0,
        finishSum: 5e5,
        saveSumProgress: [],
        rateSallUSD: 0,
        typeOperation: '',

        calcSumToFinish() {
            this.remainingAmount = this.finishSum - this.totalSum;

            if (this.remainingAmount < 0) {
                this.remainingAmount = 0;
            }

            if (this.totalSum <= 0) {
                this.totalSum = 0;
            }

            saveDateLocalStor();
            saveHistoryOperation();
            this.renderInfo();
            this.renderHistory();
        },

        calcProcentBar() {
            if (this.totalSum > this.finishSum) {
                return 100;
            }

            if (this.totalSum <= 0) {
                return 0;
            }

            return Math.trunc((100 * this.totalSum) / this.finishSum);
        },

        remCash() {
            this.totalSum -= +cashInput.value;
            this.typeOperation = '-';
            this.calcSumToFinish();
        },

        setCash() {
            this.totalSum += +cashInput.value;
            this.typeOperation = '+';
            this.calcSumToFinish();
        },

        renderInfo() {
            totalSumLabel.innerHTML = this.totalSum;

            this.totalSum == 0 ?
                remainingAmountLabel.innerHTML = this.finishSum :
                remainingAmountLabel.innerHTML = this.remainingAmount;

            progressLine.style.width = this.calcProcentBar() + '%';
            usdLabel.innerHTML = this.convertToUSD();
            rateSellUsd.innerHTML = this.rateSallUSD ? Math.round(parseFloat(this.rateSallUSD) * 100) / 100 : '-';
            finishSumLabel.innerHTML = this.finishSum;

            this.renderHistory();
            cashInput.value = '';
        },

        convertToUSD() {
            return this.rateSallUSD ? (this.totalSum / this.rateSallUSD).toFixed(2) : "-";
        },

        renderHistory() {
            let arrHistory = JSON.parse('[' + localStorage.history + ']');
            document.querySelector('.history__data-list').innerHTML = '';

            arrHistory.forEach(item => {
                let x = 'green';
                item.typeOperation == '+' ? x : x = 'red';
                let icon = item.typeOperation == '+' ? 'right-down-line' : 'left-up-line';

                document.querySelector('.history__data-list').innerHTML += `
                <div class="history__data-data">
                    <div class="history__data-date">${item.date}</div>
                    <div class="history__data-operation">
                        <div class="history__data-oper ${x}">${item.typeOperation}</div>
                        <div class="home__data-accumulated">${item.sumOperation}</div>
                        <div class="home__data-symbol uah">₴</div>
                        <span>/</span>
                        <div class="home__data-usd">${item.convertToUSD}</div>
                        <div class="home__data-symbol usd">$</div>
                    </div>
                    <div class="history__data-operation">
                        <div class="history__data-total">
                        <i class="ri-corner-${icon}"></i>
                            ${item.remainingAmount}
                        </div>
                        <div class="home__data-symbol uah">₴</div>
                    </div>
                </div>
            `;
            });
        }
    };

    const addCash = document.getElementById('plusCash');
    const minusCash = document.getElementById('minusCash');

    addCash.addEventListener('click', () => {
        if (cashInput.value === '') return;
        progressBar.setCash();
    });

    minusCash.addEventListener('click', () => {
        if (cashInput.value === '') return;
        progressBar.remCash();
    });

    // SAVE DATA IN LOCAL STORAGE BROWSER 
    function saveDateLocalStor() {
        localStorage.totalSum = progressBar.totalSum;
        localStorage.remainingAmount = progressBar.remainingAmount;
    }

    // LOAD DATA FROM LOCAL STORAGE BROWSER 
    function loadDateLocalStor() {
        if (localStorage.length == 0) return;
        progressBar.totalSum = +localStorage.totalSum;
        progressBar.remainingAmount = +localStorage.remainingAmount;
        progressBar.renderInfo();
    }


    class HttpError extends Error {
        constructor(message) {
            super(message);
            this.name = "HttpError";
        }
    }

    // GET CURRENT COURSE DOLLAR
    function getCurrencyCourseDollarAPI() {
        const url = 'https://api.monobank.ua/bank/currency';

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new HttpError(`Ошибка сетевого доступа, курс валют недоступен: ${response.status}`);
            })
            .then((data) => {
                parseObjectRate(data);
            })
            .catch((error) => {
                if (error instanceof HttpError) {
                    console.log(error.message);
                    showErrorMessage(error.message);
                }
            });
    }

    function parseObjectRate(data) {
        progressBar.rateSallUSD = data[0].rateSell;
        progressBar.renderInfo();
    }

    // VALIDATION INPUT 
    const input = document.querySelector('input[type="text"]');
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');
    });


    // SAVING USER ACTIVETY HISTORY
    function saveHistoryOperation() {

        let objHistory = {
            date: getDate(),
            typeOperation: progressBar.typeOperation,
            sumOperation: cashInput.value,
            convertToUSD: progressBar.convertToUSD(),
            remainingAmount: progressBar.totalSum,
        };

        let obj = JSON.stringify(objHistory);

        localStorage.history == undefined ?
            localStorage.history = obj :
            localStorage.history += ', ' + obj;
    }

    // GET CURRENT DATE
    function getDate() {
        let date = new Date();
        let d = date.getDate() + '.' + (+date.getMonth() + 1) + '.' + date.getFullYear();
        return d;
    }

    // ERROR MESSAGE 
    let mainContainer = document.querySelector('.home__container');
    console.log(mainContainer);

    function showErrorMessage(errorCode) {
        let div = document.createElement('div');
        let theFirstChild = mainContainer.firstChild;

        div.classList.add('error');
        div.textContent = errorCode;

        mainContainer.appendChild(div);
        mainContainer.insertBefore(div, theFirstChild);
    }


    const btnClearProgress = document.getElementById('reset');
    btnClearProgress.addEventListener('click', () => {
        clearProgress();
    });

    // RESET PROGRESS
    function clearProgress(){
        console.log('clear');
        document.querySelector('.history__data-list').innerHTML = 'Нет историй';
        progressBar.totalSum = 0;
        localStorage.clear();
        progressBar.renderInfo();
    }


    loadDateLocalStor();
    getCurrencyCourseDollarAPI();
})