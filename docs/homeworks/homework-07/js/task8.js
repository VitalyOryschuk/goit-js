'use strict';
let userInput = document.querySelector('#controls > input');
const divBoxes = document.querySelector('#boxes');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
let numberOfItems;

userInput.addEventListener('input', () => {
  numberOfItems = Number(userInput.value);
});

renderBtn.addEventListener('click', () => {
  createBoxes(numberOfItems);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

const createBoxes = amount => {
  const width = 30;
  const height = 30;
  let step = 10;
  let arr = [];
  for (let i = 1; i < amount; i++) {
    const divBox = document.createElement('div');
    divBox.style.width = width + (amount - 1) * step + 'px';
    divBox.style.height = height + (amount - 1) * step + 'px';

    arr.push(divBox);
    divBoxes.append(divBox);

    divBox.style.background =
      'rgb(' +
      Math.random() * 256 +
      ',' +
      Math.random() * 256 +
      ',' +
      Math.random() * 256 +
      ')';
  }
};
const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};
