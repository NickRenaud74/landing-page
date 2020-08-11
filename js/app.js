// Global Variables
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar');
const fragment = document.createDocumentFragment();



// Create dynamic NavBar
for (let section of sections) {
    const navMenu = document.createElement('li');
    const menuItem = section.getAttribute('data-nav');
    navMenu.innerHTML = `<a href="#${section.id}" class="nav-link">${menuItem}</a>`;
    fragment.appendChild(navMenu);
}
nav.appendChild(fragment);




// Make sections ACTIVE
const getSectionLocation = sections => {
    for (let section of sections) {
        const location = section.getBoundingClientRect();
        if (location.top >= -10 && location.bottom <= window.innerHeight) {
            section.classList.add('active');
            console.log(section.classList);
            break;
        }
        else {
            section.classList.remove('active');
            console.log(section.classList);
        }
    }
}

window.addEventListener('scroll', getSectionLocation(sections));

//Scroll to anchors
const links = document.querySelectorAll('.nav-link');

for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        rect = document.getElementById(`${sectionId}`).getBoundingClientRect();
        window.scrollTo({
            top: rect.top,
            behavior: 'smooth'
        });
    });
}
