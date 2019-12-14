"use strict";

var open = document.querySelector('.nav__button--open');
var close = document.querySelector('.overlay__button--close');
open.addEventListener('click', function () {
  document.querySelector('.overlay').classList.add('overlay-open');
});
close.addEventListener('click', function () {
  document.querySelector('.overlay').classList.remove('overlay-open');
});