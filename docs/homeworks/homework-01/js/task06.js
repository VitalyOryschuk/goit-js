let input;
let total = 0;
for (let i = 0; i !== null; i++) {
  input = prompt('Введите число');
  if (input === null) {
    total = `Общая сумма чисел равна ${total}`;
    break;
  }
  input = Number(input);
  total += input;
}
alert(total);