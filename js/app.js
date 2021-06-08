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


