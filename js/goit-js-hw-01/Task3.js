const ADMIN_PASSWORD = 'password';
console.log(`console.log(ADMIN_PASSWORD)=`, ADMIN_PASSWORD);
let message = prompt('Please enter your password');
console.log(`console.log(message)=`, message);
if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else console.log('Доступ запрещен, неверный пароль!');
alert(`It is allert message "` + message + '"');
