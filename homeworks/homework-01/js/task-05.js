let country;
let price;
let message;
let userChoise = prompt('Выберите страну доставки');
userChoise = userChoise.toLowerCase();
switch (userChoise) {
  case 'китай':
    price = 100;
    country = userChoise;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;
  case 'чили':
    price = 250;
    country = userChoise;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;
  case 'украина':
    price = 80;
    country = userChoise;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;
  case 'австралия':
    price = 170;
    country = userChoise;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;
  case 'ямайка':
    price = 120;
    country = userChoise;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;
  default:
    message = 'В вашей стране доставка не доступна';
}
alert(message);