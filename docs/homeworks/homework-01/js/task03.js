const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userPassword = prompt('Введите пароль');
if (userPassword !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
  if (userPassword === null) {
    message = 'Отменено пользователем!';
  }
} else {
  message = 'Добро пожаловать!';
}
alert(message);