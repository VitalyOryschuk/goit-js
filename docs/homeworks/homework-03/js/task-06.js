'use strict';
const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4,
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3,
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7,
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2,
  },
];
const calculateTotalPrice = function (arr, productName) {
  for (let property of arr) {
    if (property.name === productName) {
      let totalPrice = property.price * property.quantity;
      return totalPrice;
    }
  }
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));