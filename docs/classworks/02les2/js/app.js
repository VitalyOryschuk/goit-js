// 'use strict'
// // function expresion
// const userList = ['admin', 'manager', 'employe'];
// const isUserPresent = function (user, listOfUsers) {
//   return listOfUsers.includes(user);
// }
// console.log(isUserPresent('manager', userList))
// // function declaration
// const userNames = getAllUserNames(userList);
// console.log(userNames)

// function getAllUserNames(list) {
//   let result = '';
//   for (let user of list) {
//     result = result + user + ' ';
//   }
//   return result;
// }
// // default values
// const calculateSquare = function (width = 50, height = 100) {
//   console.log(Array.from(arguments));
//   return width * height;
// }
// const square = calculateSquare(500, 500, 600, 5);
// console.log(square);
// ________________________
// const sumAllArguments = function (...args) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   }
//   // console.log(...args)
//   return sum;
// }
// const sum = sumAllArguments(50, 40, 30, 20, 10);
// console.log(sum);
let inputA = prompt('Введите 1 числo');
let inputB = prompt('Введите 2 числo');
const sum = function (inputA, inputB) {
  return Number(inputA) + Number(inputB);
}
const result = sum(inputA, inputB);
console.log(result);