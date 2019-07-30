const total = 100;
let ordered = 50;
let inputOrder = prompt('Введите количество товара');
}
if (inputOrder > total && ordered === true) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}