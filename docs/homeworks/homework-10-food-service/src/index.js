import './styles.css';
import menu from './menu.json';
import menuItem from './templates/menu-item.hbs';

console.log(menu);
const refs = {
  menu: document.querySelector('.menu'),
};
// const markup = menuItem(menu[0]);
// console.log(markup);

buildMenu(menu);

function buildMenu(menu) {
  const markup = menu.map(item => menuItem(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
  console.log(markup);
}
