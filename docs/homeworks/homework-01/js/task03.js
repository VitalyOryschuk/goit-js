const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userLogin = prompt('Введите пароль');
if (userLogin !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
  if (userLogin === null) {
    message = 'Отменено пользователем!';
  }
} else {
  message = 'Добро пожаловать!';
}
alert(message);