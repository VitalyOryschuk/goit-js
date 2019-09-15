'use strict'
const input = document.querySelector('#validation-input');
input.addEventListener('change', event => {
  input.classList.add('invalid');
  if (event.currentTarget.value.length === 6) {
    input.classList.replace('invalid', 'valid');
  } else {
    input.classList.replace('valid', 'invalid');
  }
})