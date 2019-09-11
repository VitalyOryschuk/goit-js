'use strict';
const btn = document.querySelector('.btn');
const link = document.querySelector('.link');
// const logger = function() {
//   console.log(this);
//   this.addEventListener('click', logger);
// };
// const logger = function(event) {
//   console.log(event);
// };
// btn.addEventListener('click', logger);
// удаляем собитие
// btn.removeEventListener('click', logger);
// link.addEventListener('click', e => {
//   // e.preventDefault();  чтоб не переходило по ссылке
//   console.log('link clicked');
// });
const body = document.querySelector('body');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});
body.addEventListener('keydown', event => {
  console.log(event.keyCode);
  if (event.keyCode === 27) alert('escape');
});
input.addEventListener('focus', function() {
  this.setAttribute('disabled', true);
});
