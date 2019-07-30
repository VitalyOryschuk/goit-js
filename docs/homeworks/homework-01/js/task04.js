let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
// let message;
let buyDroids = prompt('Сколько дроидов вы хотите купить?');
totalPrice = buyDroids * pricePerDroid;
if (buyDroids === null) {
  totalPrice = 'Отменено пользователем!';
  console.log(totalPrice);
}
if (totalPrice > credits) {
  totalPrice = 'Недостаточно средств на счету!';
} else {
  totalPrice = `Вы купили ${buyDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
  console.log(totalPrice);
  // console.log(message);
}