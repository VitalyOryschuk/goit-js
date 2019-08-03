'use strict'
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  numbers.push(Number(input));
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
    numbers.pop((input));
    continue;
  }
}
while (input !== null);
for (let i = 0; i < numbers.length; i++)
  total += numbers[i];

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);