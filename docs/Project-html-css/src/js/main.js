let open = document.querySelector('.nav__button--open');
let close = document.querySelector('.overlay__button--close');

open.addEventListener('click', () => {
  document.querySelector('.overlay').classList.add('overlay-open');
});

close.addEventListener('click', () => {
  document.querySelector('.overlay').classList.remove('overlay-open');
});
