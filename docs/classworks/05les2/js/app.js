'use strict';
const dog = { bark: 1 };
const bigDog = Object.create(dog);
console.log(bigDog);

bigDog.name = 'Chaky';
for (let key in bigDog) {
  // свщйства не прототипов
  if (!bigDog.hasOwnProperty(key)) continue;
  console.log(key);
}
console.log(bigDog, 'bigDog');

const User = function(name, age) {
  this.name = name;
  this.age = age;
  // // bad practic
  // this.great = function() {
  //   console.log(`My name is ${this.name}`);
  // };
};
// good practic
User.prototype.say = function() {
  console.log('Hello, my age is ${this.age}');
};
const admin = new User('Ben', 25);
// admin.say();
// console.log(admin);
// console.log(User.prototype, 'prototype');
const SupreAdmin = function(name, age, levelOfControl) {
  User.call(this, name, age);

  this.levelOfControl = levelOfControl;
};
SupreAdmin.prototype = Object.create(User.prototype);
SupreAdmin.prototype.constructor = SupreAdmin;

const billy = new SupreAdmin('Billy', 40, 10);
// billy.say();
// console.log(billy);
class Hero {
  constructor(name, color, power) {
    this.name = name;
    this.color = color;
    this._power = power;
  }
  great() {
    console.log(`My name is ${this.name}`);
  }
  get power() {
    return this._power;
  }
  set power(powerType) {
    this._power = `${powerType} is amazing!`;
  }
}
const hulk = new Hero('Hulk', 'green', 'superrrr');
console.log(hulk.power);
hulk.power = 'huge';
console.log(hulk.power);
console.log(hulk);
hulk.great();
