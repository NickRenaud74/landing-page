
// Global Variables
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar');
const start = performance.now();

// Create dynamic NavBar
const createNavBar = () => {
    const fragment = document.createDocumentFragment();
    for (let section of sections) {
        const navMenu = document.createElement('li');
        const menuItem = section.dataset.nav;
        navMenu.innerHTML = `<a href="#${section.id}" class="nav-link ${section.id}">${menuItem}</a>`;
        fragment.appendChild(navMenu);
    }
    nav.appendChild(fragment);
}
createNavBar(sections);

// Make sections ACTIVE when in viewport
const makeActive = () => {
    for (let section of sections) {
        const location = section.getBoundingClientRect();
        const navRect = document.querySelector('#navbar').getBoundingClientRect();
        if (location.top >= -5 && location.bottom <= window.innerHeight) {
            section.classList.add('active');
        }
        else {
            section.classList.remove('active');
        }
    }
}

window.addEventListener('scroll', () => {
    makeActive()
});

//Scroll to anchors
const smoothScroll = () => {
    const links = document.querySelectorAll('.nav-link');
    for (let link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').slice(1);
            rect = document.getElementById(`${sectionId}`);
            rect.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

smoothScroll();

//Return to top button
const hideHomeButton = () => {
    const body = document.querySelector('body');
    const homeButton = document.querySelector('.home');
    homeButton.classList.toggle('hide');
    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= body.offsetHeight / 2) {
            homeButton.classList.remove('hide');
        }
        else {
            homeButton.classList.add('hide');
        }
    })
}
hideHomeButton();

//Hide NavBar on scroll
let timer = null;
const hideNav = () => {
    window.addEventListener('scroll', (event) => {
        if (timer !== null) {
            clearTimeout(timer);
            nav.style.display = 'flex';
        }
        timer = setTimeout(() => {
            nav.style.display = 'none';
        }, 2000);
    })
}

hideNav();

const end = performance.now();
console.log(end - start);
console.log(document.body.offsetHeight)
