'use strict'
const range = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');
const baseFontSize = 14;
const fontSizeGap = 50;
text.style.fontSize = `${baseFontSize}`;
range.addEventListener('change', e => {
  const fontSize = baseFontSize + fontSizeGap * range.value / 100;
  text.style.fontSize = `${fontSize}px`;
  // console.log(range.value);
})