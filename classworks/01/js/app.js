// const car = {
//   speed: 100
// }
// const bigCar = car;

// bigCar.speed = 200;

// const dog = 'dog';
// let cat = 'cat';
// dog = 'Bob';
// cat = 'Tomas';

let password, salary;
const userName = 'Bob';
const userLastName = 'Dilan';
const age = '55';
let isLogedin = false;
const VAT = 0.2;


console.log(userName, userLastName);
// alert(userName);
// NaN
console.log(userName / age);
console.log(typeof userName);

isLogedin = confirm('Are you loggedin?');

if (isLogedin) {
  const salaryWithoutVAT = prompt('Enter you salary');
  salary = +salaryWithoutVAT * (1 - VAT);
  console.log(salary);
}
const foo = 5 % 3;
let isEven = foo === 0;
console.log(isEven);
const result = `Hello ${userName} ${userLastName}!!
 Your age is ${age}. Your salary ${salary}`;
alert(result);

if (userName && userLastName && salary) {
  console.log('is valid')
} else if (userName || userLastName || salary) {
  console.log('somesing fullfilled')
}