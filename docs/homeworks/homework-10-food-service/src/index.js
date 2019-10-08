import './styles.css';
import menu from './menu.json';
import menuItem from './menu-item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const Refs = {
  menu: document.querySelector('.menu'),
  bodyTheme: document.querySelector('body'),
  input: document.querySelector('#theme-switch-control'),
};

Refs.input.addEventListener('change', changeTheme);

function changeTheme() {
  Refs.bodyTheme.classList.toggle(Theme.DARK);
  if (Refs.bodyTheme.classList.contains(Theme.DARK)) {
    Refs.bodyTheme.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    Refs.bodyTheme.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

if (localStorage.getItem('theme') === Theme.DARK) {
  Refs.input.setAttribute('checked', true);
  Refs.bodyTheme.classList.toggle(Theme.DARK);
};

// console.log(markup)
buildMenu(menu);

function buildMenu(menu) {
  const markup = menu.map(item => menuItem(item)).join('');
  Refs.menu.insertAdjacentHTML('beforeend', markup);
};
