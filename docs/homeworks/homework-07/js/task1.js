'use strict';
const liItems = document.querySelectorAll('.item');
console.log(liItems.length);
const item = document.querySelector('.item');
for (let i = 0; i < liItems.length; i += 1) {
  console.log(
    `Категория: ${liItems[i].firstElementChild.textContent},
     Количество элементов: ${liItems[i].lastElementChild.children.length}`);
}