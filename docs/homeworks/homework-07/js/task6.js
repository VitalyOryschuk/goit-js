'use strict'
const input = document.querySelector('#validation-input');
const inputIsValid = Number(input.getAttribute('data-length'));
input.addEventListener('change', event => {
  input.classList.add('invalid');
  if (event.currentTarget.value.length === inputIsValid) {
    input.classList.replace('invalid', 'valid');
  } else {
    input.classList.replace('valid', 'invalid');
  }
})