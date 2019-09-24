'use strict'

let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

const increment = () => {
  counterValue++;
  span.textContent = counterValue;
}
const decrement = () => {
  counterValue--;
  span.textContent = counterValue;
}
buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);