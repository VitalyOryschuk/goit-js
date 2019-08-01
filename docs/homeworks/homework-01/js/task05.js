const china = 100;
const chily = 250;
const australia = 170;
const india = 80;
const jamaica = 120;
let userChoise = prompt('Выберите страну доставки');
if (userChoise === null) {
  alert('Отмена!');
} else {
  switch (userChoise.toLowerCase()) {
    case 'китай':
      alert(`Доставка в ${userChoise.toLowerCase()} будет стоить ${china} кредитов`);
      break;
    case 'чили':

      alert(`Доставка в ${userChoise.toLowerCase()} будет стоить ${chily} кредитов`);
      break;
    case 'австралия':

      alert(`Доставка в ${userChoise.toLowerCase()} будет стоить ${australia} кредитов`);
      break;
    case 'австралия':

      alert(`Доставка в ${userChoise.toLowerCase()} будет стоить ${india} кредитов`);
      break;
    case 'ямайка':

      alert(`Доставка в ${userChoise.toLowerCase()} будет стоить ${jamaica} кредитов`);
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}