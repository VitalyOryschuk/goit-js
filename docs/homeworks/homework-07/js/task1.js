'use strict';
const liItems = document.querySelectorAll('.item');
console.log(liItems);
const item = document.querySelector('.item');
for (let i = 0; i < liItems.length; i += 1) {
  console.log(
    `Категория: ${liItems[i].firstElementChild.textContent},
     Количество элементов: ${liItems[i].lastElementChild.children.length}`);
}