/*  Написати JavaScript-код для обробки надсилання форми та виконання перевірки 
на стороні клієнта.

Перевірка форми: потрібно отримати значення імені користувача, електронної пошти 
та пароля.

Виконати базову перевірку:

    ім’я користувача не може бути пустим,
    електронна адреса має бути у правильному форматі,
    пароль має містити принаймні 8 символів,
    пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та 
    один спеціальний символ.

Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне 
повідомлення про помилку. Повідомлення про помилки відображаються в розділі 
errorMessages.

Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.*/


const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const errors = [];

  if (!username) {
    errors.push('Ім\'я користувача не може бути пустим.');
  }

  if (!validateEmail(email)) {
    errors.push('Eлектронна адреса має бути у правильному форматі.');
  }

  if (password.length < 8) {
    errors.push('Пароль має містити щонайменше 8 символів.');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Пароль має містити щонайменше одну велику літеру.');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Пароль має містити щонайменше одну маленьку літеру.');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Пароль має містити щонайменше одну цифру.');
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Пароль має містити щонайменше один спеціальний символ.');
  }

  if (errors.length > 0) {
    errorMessages.innerHTML = errors.join('<br>');
    return;
  }

  form.reset();
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


