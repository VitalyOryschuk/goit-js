'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

let timerId;

const changeColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    timerId = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, colors.length - 1);
      Refs.body.style.backgroundColor = colors[randomColor];
    }, 1000);
  },
  stop() {
    clearInterval(timerId);
    this.isActive = false;
  },
};

Refs.btnStart.addEventListener('click', changeColor.start.bind(changeColor));
Refs.btnStop.addEventListener('click', changeColor.stop.bind(changeColor));
