let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;
const buyDroids = prompt('Сколько дроидов вы хотите купить?');
totalPrice = buyDroids * pricePerDroid;
if (buyDroids === null) {
  message = 'Отменено пользователем!';
  console.log(message);
}
if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${buyDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
  console.log(totalPrice);
}
console.log(message);