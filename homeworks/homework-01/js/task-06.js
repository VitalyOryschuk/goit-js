let input;
let total = 0;
while (true) {
  input = prompt('Введите число');
  if (input === null) {
    total = `Общая сумма чисел равна ${total}`;
    break;
  }
  input = Number(input);
  total += input;
}
alert(total);