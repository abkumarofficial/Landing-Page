/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// selecting all the sections in the page
const allSections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

for (let i = 1; i <= allSections.length ; i += 1) {
    const liData = document.createElement('li');
    // Adding link to the li and class into it
    liData.innerHTML = `<a id="navbar-${allSections[i-1].id}" class="menu__link">Section ${i}</a>`
    liData.addEventListener('click', () => {
        allSections[i-1].scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      });
    fragment.appendChild(liData);
}
navbar.appendChild(fragment);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", function() {
  makeActive();
});

function makeActive() {
  allSections.forEach(section => {
    let box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {
        document.querySelector(`.${section.id}`).classList.add('active')
        section.classList.remove('your-active-class')
    } else {
        document.querySelector(`.${section.id}`).classList.remove('active')
        section.classList.remove('your-active-class')
    }
  })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


