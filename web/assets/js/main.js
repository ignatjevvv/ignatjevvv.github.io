'use strict';

document.addEventListener('DOMContentLoaded', () => {
    /*=============== FILTERS TABS ===============*/

    const tabs = document.querySelectorAll('[data-target]'),
          tabContent = document.querySelectorAll('[data-content]');

    tabs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            addClassActive(btn);
        });
    });

    function addClassActive(btn) {
        // Add active class for button tab
        tabs.forEach(btn => {
            btn.classList.remove('filter-tab-active');
        });

        btn.classList.add('filter-tab-active');

        // Add active class for filter content
        tabContent.forEach(tab => {
            tab.classList.remove('filters__active');
        });

        document.querySelector(btn.dataset.target).classList.add('filters__active');
    }
});


/*==================== DARK LIGHT THEME ====================*/

const themeButtom = document.getElementById('theme-button'),
      iconTheme = 'ri-sun-line',
      darkTheme = 'dark-theme';

themeButtom.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButtom.classList.toggle(iconTheme);
    saveLocalStorageTheme();
});

function saveLocalStorageTheme() {
    localStorage.setItem('selected-theme', 
    document.body.classList.contains(darkTheme) ? true : false);
}

if (!localStorage.getItem('selected-theme')) {
    document.body.classList.add(darkTheme);
    themeButtom.classList.add(iconTheme);
}