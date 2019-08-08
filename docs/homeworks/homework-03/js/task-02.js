'use strict'
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const countProps = function (obj) {
  return Object.keys(obj).length;
}
console.log(countProps({}));
console.log(countProps({
  name: 'Mango',
  age: 2
}));
console.log(countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500
}));