'use strict'
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');
const createLi = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;

  console.log(li);
  return li;
});
ul.append(...createLi);