window.addEventListener('DOMContentLoaded', () => {
    const calc = require('./modules/calc'),
          elect = require('./modules/elect'),
          water = require('./modules/water');

          calc();
          elect();
          water();
});