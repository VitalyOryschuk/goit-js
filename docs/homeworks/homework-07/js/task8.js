'use strict'

const createBoxes = (amount) => {
  const width = 30;
  let step = 10;
  let arr = [];
  for (let i = 1; i <= amount; i++) {
    const div = document.querySelector('div');
    div.style.width = width * (amount - 1) * step;
    div.style.height = height * (amount - 1) * step;

    arr.push(div);
  }
}