'use strict'
const input = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');
input.addEventListener('input', () => {
  outputSpan.textContent = event.currentTarget.value;
  if (input.value === "") outputSpan.textContent = 'Незнакомец';
});