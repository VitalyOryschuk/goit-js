const total = 100;
const ordered = 50;
let message;
const userChois = prompt('Введите количество товара');
if (userChois > total) {
  message = "На складе недостаточно твоаров!";
} else {
  message = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(message);