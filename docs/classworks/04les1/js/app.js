'use strict';
// const array = [1, 2, 3, 4, 5];
// const sumArrayItems = function(array, callback) {
//   let result = 0;
//   for (let item of array) {
//     result += item;
//   }
//   callback(result);
// };
// const multiplyByTwo = function(value) {
//   console.log(value * 2);
// };
// sumArrayItems(array, console.log);
// sumArrayItems(array, multiplyByTwo);
// sumArrayItems(array, e => {
//   console.log(e * 15);
// });

const filter = (array, testCallback) => {
  let filteredArray = [];
  for (let item of array) {
    const passed = testCallback(item);
    if (passed) filteredArray.push(item);
  }
  return filteredArray;
};
const valueGreaterThenZero = value => value > 0;
const rawArray = [5, 0, -5, 2, 8, -10];
console.log(filter(rawArray, valueGreaterThenZero));
const foo = [
  {
    title: 'car1',
    price: 200,
  },
  {
    title: 'car2',
    price: 100,
  },
  {
    title: 'car3',
    price: 150,
  },
];
const maxPrice = filter(foo, value => {
  return value.price > 100;
});

console.log(maxPrice);

// const calc = height => width => depth => height * width * depth;
const calc = function(height) {
  return function(width) {
    return function(depth) {
      return height * width * depth;
    };
  };
};

const square = function(width) {
  return function(height) {
    return width * height;
  };
};
const rectangleWithSaemeWidth = square(100);
console.log(rectangleWithSaemeWidth(500));
console.log(rectangleWithSaemeWidth(200));
calc(500)(200)(100);

const sumNumber = function(a) {
  return function(b) {
    return a + b;
  };
};
let sum = sumNumber(10);
console.log(sum(5));
sumNumber(5)(5);

const pop = function() {
  let arr = [];
  return function(i) {
    arr.push(i);
    console.log(arr);
  };
};

const hell = pop();
hell(500);
hell('hello');
