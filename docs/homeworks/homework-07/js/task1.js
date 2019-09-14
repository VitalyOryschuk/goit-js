'use strict';
const liItems = document.querySelectorAll('.item');
console.log(liItems);
// const h2 = document.querySelector('h2');
// const item = document.querySelector('.item');
// const ul = document.querySelector('ul');
console.log(liItems[0].textContent, liItems[1].textContent, liItems[2].textContent)

// const range = document.querySelector('#font-size-slider');
// const text = document.querySelector('#text');
// const BASE_FZ = 14;
// range.addEventListener('change', e => {
//   const fz = 14 * 50 * range.value / 100
//   text.style.fontSize = `${fz}px`
//   console.log(range.value)
// })