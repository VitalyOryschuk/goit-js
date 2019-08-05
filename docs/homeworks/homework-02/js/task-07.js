'use strict';
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  numbers.push(Number(input));

  if (numbers.length !== 0 && input === null) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
  }
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
    numbers.pop();
  }
}
while (input !== null);