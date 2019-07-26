const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userLogin = prompt('Введите пароль');
if (userLogin === null) {
  message = 'Отменено пользователем!';
}
if (userLogin === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);