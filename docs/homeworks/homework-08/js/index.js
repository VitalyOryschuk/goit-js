'use strict';
import gallery from './gallery-items.js';
// добавляем елементы галереи
const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('afterbegin', createLiRow(gallery));

function createLiRow(galleryItem) {
  return galleryItem.reduce((markup, image) => markup + createRowMarkup(image), '');
}

function createRowMarkup({
  preview,
  original,
  description
}) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;
}

const lightbox = document.querySelector('.lightbox');
const openModalImg = document.querySelector('.lightbox___image');
// открываем модальное окно добавляем клас

function openModal(e) {
  if (e.target === e.currentTarget) return;
  e.preventDefault();
  lightbox.classList.add('is-open');
  // console.log(e.target);
  // console.log(lightbox);
  const imgSrc = e.target.getAttribute('data-source');
  const imgAlt = e.target.getAttribute('alt');

  openModalImg.setAttribute('src', imgSrc);
  openModalImg.setAttribute('alt', imgAlt);
};
galleryList.addEventListener('click', openModal);

// закрываем модальное окно

const btn = document.querySelector('.lightbox__button');

function closeModal() {

  lightbox.classList.remove('is-open');
  openModalImg.setAttribute('src', '');
  openModalImg.setAttribute('alt', '');
};
btn.addEventListener('click', closeModal);


// закрываем модальное окно через esc
function closeKey(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
};

galleryList.addEventListener('keydown', closeKey);
// закрываем модальное окно при клике на оверлей
const divContent = document.querySelector('.lightbox__content');

function closeClick(e) {
  if (e.target !== e.currentTarget) return; {
    closeModal();
  }
};
divContent.addEventListener('click', closeClick);