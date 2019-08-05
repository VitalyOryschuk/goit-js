'use strict'

const hulk = {
  name: 'Hulk',
  color: 'green',
  realName: 'Benner',
  hulkTalk: function () {
    console.log(`I am ${hulk.name}`)
  },
  getHulkRealName: function () {
    console.log(`I am ${this.realName}`)
  }
};
hulk.hulkTalk();
hulk.getHulkRealName();




console.log(hulk);
console.log(hulk.name, hulk['color']);
// когда нада булиновское значение
// console.log(!!hulk);
const userFilterInput = 'name';
console.log(hulk[userFilterInput]);
const mickeyMouse = {
  name: 'Micky',
  color: 'Black',
  realName: 'Micky',
  getName: function () {
    console.log(`My name ${this.name}`)
  },
  getColor: function () {
    console.log(`My color ${this.color}`)
  },
};
mickeyMouse.getName();
mickeyMouse.getColor()



const guffy = {
  name: 'Guffy',
  color: 'Black',
  realName: 'Guffy'
}
const dreamTeam = [hulk, mickeyMouse, guffy];

function getHerosByColor(color) {
  let result = [];
  for (let hero of dreamTeam) {
    if (hero.color === color) {
      result.push(hero);
    }
  }
  return result;

}
console.log(getHerosByColor('Black'));

function getHeroNameAndRealName(hero) {
  return console.log(`name: ${hero.name} and real-name: ${hero.realName}`);
}
getHeroNameAndRealName(hulk);
getHeroNameAndRealName(guffy);
getHeroNameAndRealName(mickeyMouse);

const totalPrice = 100;
const limit = 150;
const cart = {
  storeName: 'Nike',
  totalPrice: totalPrice,
  limit: limit
}
// es6 syntax
const cart1 = {
  storeName: 'Nike',
  totalPrice,
  limit
}