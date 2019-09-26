'use strict'
const input = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

const inputText = () => {
  outputSpan.textContent = event.currentTarget.value;
  if (input.value === "") outputSpan.textContent = 'Незнакомец';
}
input.addEventListener('input', inputText);