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
    id: 1,
    name: 'Tel',
    price: 55,
    inStock: true,
  },
  {
    id: 2,
    name: 'Tv',
    price: 5500,
    inStock: true,
  },
  {
    id: 3,
    name: 'car',
    price: 55555,
    inStock: true,
  },
  {
    id: 4,
    name: 'mouse',
    price: 100,
    inStock: false,
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
cart.showInfo();
cart.log();
cart.setInStockById(8);
