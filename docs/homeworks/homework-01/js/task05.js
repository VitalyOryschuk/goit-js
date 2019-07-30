let costofDelivery;
let userChoise = prompt('Выберите страну доставки');
if (userChoise === null) {
  alert('Отмена');
} else {
  switch (userChoise.toLowerCase()) {
    case 'китай':
      costofDelivery = 100;
      alert(`Доставка в Китай будет стоить ${costofDelivery} кредитов`);
      break;
    case 'чили':
      costofDelivery = 250;
      alert(`Доставка в Чили будет стоить ${costofDelivery} кредитов`);
      break;
    case 'украина':
      costofDelivery = 80;
      alert(`Доставка в Украину будет стоить ${costofDelivery} кредитов`);
      break;
    case 'австралия':
      costofDelivery = 170;
      alert(`Доставка в Австралия будет стоить ${costofDelivery} кредитов`);
      break;
    case 'ямайка':
      costofDelivery = 120;
      alert(`Доставка в Ямайку будет стоить ${costofDelivery} кредитов`);
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}