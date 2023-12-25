window.addEventListener('DOMContentLoaded', () => {
    const calc = require('./modules/calc'),
          elect = require('./modules/elect'),
          water = require('./modules/water');

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