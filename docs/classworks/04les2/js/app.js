'use strict';

const hero = {
  name: 'Viktor Pavlik',
  sing() {
    console.log(`Town of green light by ${this.name}`);
  },
};
hero.sing();
const hero1 = {
  name: 'Dodo',
  sing: hero.sing,
};

const hello = hero.sing.bind(hero1);
hello();

const getFullName = function(message) {
  console.log(`${message}  ${this.name} ${this.lastName}`);
};
const user = {
  name: 'John',
  lastName: 'Travolta',
};
// getFullName('He is');
getFullName.call(user, 'He is');

const arr = [1, 2, 3, 5, 7];
// const maxVal = Math.max.apply({}, arr);
const maxVal = Math.max(...arr);
console.log(maxVal);

const getDetails = function(description) {
  return `${description} ${this.name}`;
};
const company = {
  name: 'Bosh',
};
const getCompanyDetails = getDetails.bind(company, 'Our company is: ');
console.log(getCompanyDetails());

const store = {
  name: 'VidaX1',
  description: 'Nice store',
};
const showStoreName = function() {
  console.log(this.name);
};
store.showStorename = showStoreName;
store.showStoreName();

// const getInfo = function(callback) {
//   const name = 'John';

//   callback();
// };
// getInfo(hero.sign);

// const fn = () => {
//   console.log(this);
// };
// const fn1 = function() {
//   console.log(this);
// };
// fn();
// const person = {
//   name: 'Ban',
// };
// person.showContext = fn;
// person.showContext();
// person.showContext1 = fn1;
// person.showContext1();
