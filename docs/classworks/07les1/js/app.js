'use strict'
// мoдальное окно
const popup = document.querySelector('.modal');
const menuBtn = document.querySelector('.menu-btn');
const popupConfirmButton = document.querySelector('.btn-confirm');

// добавляем клас
const openPopup = () => popup.classList.add('modal--open');
const closePopup = () => popup.classList.remove('modal--open');

console.log(popup, menuBtn);
// событие клик на кнопку
menuBtn.addEventListener('click', openPopup);
popupConfirmButton.addEventListener('click', closePopup);
// меняем таргет
popup.addEventListener('click', function (event) {
  if (event.target === this) closePopup();
});
// вставить елемент
const h1 = document.createElement('h1');
const body = document.querySelector('body');
h1.textContent = 'Awesome title';
// после боди
// body.appendChild(h1);
// куда именно
body.insertBefore(h1, menuBtn);
// добавляем список
const ul = document.createElement('ul');
const fruits = ['apple', 'kiwi', 'mango'];
const createLi = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}
fruits.forEach(item => {
  ul.appendChild(createLi(item));
})
body.insertBefore(ul, h1);

const img = '<img onClick="alert(1111)" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg">';
h1.innerHTML = img;