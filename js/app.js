
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

// Make sections ACTIVE
const makeActive = () => {
    for (let section of sections) {
        const location = section.getBoundingClientRect();
        const navRect = document.querySelector('#navbar').getBoundingClientRect();
        if (location.top >= navRect.bottom && location.bottom <= window.innerHeight) {
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
                block: 'center'
            });
        });
    }
}

smoothScroll();

//Return to top button
const hideHomeButton = () => {
    const body = document.querySelector('body');
    const homeButton = document.querySelector('.home');
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

const end = performance.now();
console.log(end - start);
console.log(document.body.offsetHeight)
