// 'use strict';
// function validatePIN(pin) {
//   return (pin = (Number(pin) && pin.length === 4) || pin.length === 6);
// }

// console.log(validatePIN('1234'));
// console.log(validatePIN('12345'));
// console.log(validatePIN('12345n'));
function sym(...args) {
  return removeDublicates(args).reduce((acc, item) => {
    return item.reduce((totalArr, val) => {
      return totalArr.includes(val)
        ? totalArr.filter(item => item !== val)
        : [...totalArr, val];
    }, acc);
  }, []);
}

function removeDublicates(array) {
  return array.map(item => {
    return item.reduce((acc, val) => {
      return acc.includes(val) ? acc : [...acc, val];
    }, []);
  });
}
sym([1, 2, 5], [2, 3, 5]);
// рекурсия факториал

// function fact(value) {
//   if (value === 1) return 1;
//   return value * fact(value - 1);
// }
// alert(fact(4));

// рекурсия вместо forEach
const foo = [1, 2, 3, 4, 5];
function fact(arr, index = 0) {
  if (arr.length === index) return;
  console.log(arr[index]);
  index++;
  fact(arr, index);
}
fact(foo);
