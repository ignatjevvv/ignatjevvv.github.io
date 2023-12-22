'use strict';

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
        rateSellUsd.innerHTML = this.rateSallUSD;
        finishSumLabel.innerHTML = this.finishSum;

        this.renderHistory();
        cashInput.value = '';
    },

    convertToUSD() {
        return (this.totalSum / this.rateSallUSD).toFixed(2);
    },

    renderHistory() {
        let arrHistory = JSON.parse('['+localStorage.history+']');
        document.querySelector('.history__data-list').innerHTML = '';

        arrHistory.forEach(item => {
            let x = 'green';
            item.typeOperation == '+' ? x : x = 'red';

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
                        <div class="history__data-total">${item.remainingAmount}</div>
                        <div class="home__data-symbol uah">₴</div>
                    </div>
                </div>
            `;
        });
    }
};

let btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e.target.id);
        if(cashInput.value === '') return; 
        
        e.target.id === 'plusCash' ?
            progressBar.setCash() :
            progressBar.remCash();
    });
});

function saveDateLocalStor() {
    localStorage.totalSum = progressBar.totalSum;
    localStorage.remainingAmount = progressBar.remainingAmount;
}

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

function getCurrencyCourseDollarAPI() {
    let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

    const options = {
        method: 'GET',
        // mode: 'no-cors'
      };

    fetch(url, options)
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
    progressBar.rateSallUSD = data[0].sale;
    progressBar.renderInfo();
}


const input = document.querySelector('input[type="text"]');

input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
});


// Save History Operation User

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

function getDate() {
    let date = new Date();
    let d = date.getDate() + '.' + (+date.getMonth() + 1) + '.' + date.getFullYear();
    return d;
}


let mainContainer = document.querySelector('.home__container');
console.log(mainContainer);

function showErrorMessage(errorCode) {
    let div = document.createElement('div');
    let theFirstChild = mainContainer.firstChild;

    div.classList.add('error');
    div.textContent = errorCode;

    mainContainer.appendChild(div);
    mainContainer.insertBefore(div, theFirstChild);

    // setTimeout(() => {
    //     document.querySelector('.error').remove();
    // }, 5000);
}

// showErrorMessage();

loadDateLocalStor();
getCurrencyCourseDollarAPI();


// https://va-backend.treeum.net/api/search/applications_data?action=buy&profile_id=6058a050ee8f0319234fe6ff&size=60
// https://va-backend.treeum.net/api/branches_rates?embedded={%22branch_id%22:1,%22profile_id%22:1}&max_results=50&page=1&where={%22branch_id%22:%22605a111b583f660a5c799b50%22,%22currency%22:%22usd%22}

