'use strict';
// задержка скрола 2 сек

window.addEventListener('scroll', () => _.throttle((e) => {
  console.log(e);
}, 2000))
// задержка0.5 сек
const searchInput = document.querySelector('.search__input');
searchInput.addEventListener('input', _.debounce((event) => {
  console.log(event.target.value)
}, 500))

const navLinks = Array.from(document.querySelectorAll('.nav_link'));
const sections = Array.from(document.querySelectorAll('.navigation-section'));

const addActiveLink = (link) => {
  link.classList.add('active');
}
const removeActiveLink = (link) => {
  link.classList.remove('active');
}
const setActiveNavLinkByNavData = (navData) => {
  const activeLink = navLinks.find(elem => elem.getAttribute('data-nav') === navData)
  addActiveLink(activeLink);
}
const options = {
  rootMargin: '-50px',
  threshold: 0
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    // console.log(entry);
    if (entry.isIntersecting) {
      // observer.unobserve(zoo)
      const sectionName = entry.target.getAttribute('data-section');
      console.log(sectionName);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);
sections.forEach(section => observer.observe(section));


addActiveLink(navLinks[0]);