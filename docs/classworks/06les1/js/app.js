'use strict';

const users = ['Ben', 'Alex', 'Fifi', 'Anton', 'Rafaelo', 'Donatello', 'Tomat'];
users.forEach(item => console.log(item));

// users.prototype.forEach = function(fn) {
//   for (let i = 0; i < this.lenght; i++) {
//     fn(this[i], i, this);
//   }
// };
users.forEach(function(item, index, array) {
  array[index] = { name: item };
});
console.log(users);

const bar = function(a, b, fn) {
  return fn(a, b);
};
console.log(
  bar(2, 5, function(a, b) {
    return a + b;
  }),
);

const productList = [
  {
    id: 0,
    name: 'Vivo Y17',
    price: 550,
    inStock: true,
    imgUrl:
      'https://www.91-img.com/pictures/133713-v2-vivo-y17-mobile-phone-large-1.jpg',
  },
  {
    id: 1,
    name: 'Vivo Z25',
    price: 5500,
    inStock: true,
    imgUrl:
      'https://www.91-img.com/pictures/134236-v3-vivo-z5x-mobile-phone-large-1.jpg',
  },
  {
    id: 2,
    name: 'Apple Xr',
    price: 555,
    inStock: true,
    imgUrl:
      'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xr/blue/Apple-iPhoneXr-Blue-1-3x.jpg',
  },
  {
    id: 3,
    name: 'Jio',
    price: 1000,
    inStock: false,
    imgUrl: 'https://n1.sdlcdn.com/imgs/g/z/o/1-637b9.jpg',
  },
];
const cart = {
  productList,
  getTotalPrice() {
    return this.productList.reduce((acc, product) => acc + product.price, 0);
  },
  add(product) {
    this.productList.push(product);
  },
  removeById(id) {
    this.productList = this.productList.filter(product => product.id !== id);
  },
  showInfo() {
    this.productList.forEach(product =>
      console.log(`Product name: ${product.name} and price ${product.price}`),
    );
  },
  isAllProductInStock() {
    const res = this.productList.every(product => product.inStock);
    if (!res) console.log('Some products is out of stock');
    return res;
  },
  setInStockById(id) {
    const searchedProduct = this.productList.find(product => product.id === id);
    searchedProduct
      ? (searchedProduct.inStock = true)
      : console.log('Product was not found');
  },
  log() {
    console.log(this.productList);
  },
};
// cart.showInfo();
// cart.log();
// cart.setInStockById(8);
const cartItem = item => {
  return `<li class="cart__item">
  <figure class="cart__figure">
      <img src="${item.imgUrl}" alt="" class="cart__img">
  </figure>
  <div class="cart__details">
      <h2 class="cart__title">${item.name}</h2>
      <span class="cart__price">Price: ${item.price}</span>
      <button class="btn" data-id="${item.id}">Delete</button>
  </div>
</li>`;
};
const cartList = document.querySelector('.cart__list');
const renderList = () => {
  cartList.innerHTML = cart.productList
    .map(item => cartItem(item))
    .reduce((acc, item) => acc + item, '');
};
renderList();
// console.log(cartList);
// иннерштмл превращает текст строку в разметку

cartList.addEventListener('click', e => {
  if (e.target.classList.contains('btn')) {
    const id = e.target.getAttribute('data-id');
    cart.removeById(+id);
    renderList();
  }
});
