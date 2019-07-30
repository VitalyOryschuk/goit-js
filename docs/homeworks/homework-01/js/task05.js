let delivery;
let userChoise = prompt('Выберите страну доставки');
if (userChoise === null) {
  alert('Отмена');
} else {
  switch (userChoise.toLowerCase()) {
    case 'китай':
      delivery = `Доставка в Китай будет стоить 100 кредитов`;
      alert(delivery);
      break;
    case 'чили':
      delivery = `Доставка в Чили будет стоить 250 кредитов`;
      alert(delivery);
      break;
    case 'украина':
      delivery = `Доставка в Украину будет стоить 80 кредитов`;
      alert(delivery);
      break;
    case 'австралия':
      delivery = `Доставка в Австралия будет стоить 170 кредитов`;
      alert(delivery);
      break;
    case 'ямайка':
      delivery = `Доставка в Ямайку будет стоить 120 кредитов`;
      alert(delivery);
      break;
    default:
      delivery = 'В вашей стране доставка не доступна';
      alert(delivery);
  }
}