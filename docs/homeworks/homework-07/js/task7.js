'use strict'
const range = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');
range.addEventListener('change', e => {
  const fontSize = 14 * 50 * range.value / 100;
  text.style.fontSize = `${fontSize}px`;
  // console.log(range.value);
})