let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let buyDroids = prompt('Сколько дроидов вы хотите купить?');
if (buyDroids === null) {
  console.log('Отменено пользователем!');
}
totalPrice = buyDroids * pricePerDroid;
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(`Вы купили ${buyDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}