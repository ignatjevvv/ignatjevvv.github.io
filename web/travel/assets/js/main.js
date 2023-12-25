/*============== SHOW MENU ==============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*======= MENU SHOW =======*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
} 


/*============== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause() {
    if(videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        // Pause video
        videoFile.pause();
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', finalVideo);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTION ACTIVE LINK ====================*/
const section = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== DARK LIGHT THEME ====================*/

const themeButtom = document.getElementById('theme-button'),
      nameTheme = document.querySelector("#nav-menu > div > span"),
      iconTheme = 'ri-sun-line',
      darkTheme = 'dark-theme';

themeButtom.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButtom.classList.toggle(iconTheme);
    nameTheme.innerText = document.body.classList.contains(darkTheme) ? 'Light mode' : 'Dark mode';
    saveLocalStorageTheme();
});

function saveLocalStorageTheme() {
    localStorage.setItem('selected-theme', 
    document.body.classList.contains(darkTheme) ? true : false);
}

if (!localStorage.getItem('selected-theme')) {
    document.body.classList.add(darkTheme);
    nameTheme.innerText = 'Light mode';
    themeButtom.classList.add(iconTheme);
}