class AuthException extends Error {
  constructor(code, message) {
    super(message ? `${code}: ${message}` : code);
  }
}

let isAuth = (auth) => auth ?? false;

let checkAuth = document.querySelector('.check-auth');

checkAuth.addEventListener('click', () => {
  try {
    if (!isAuth()) {
      throw new AuthException('FORBIDDEN', "You don't have access to this page");
    } else {
      window.open('success.html');
    }
  } catch (e) {
    let messageParagraph = document.querySelector('.message');
    messageParagraph.textContent = e.toString();
    showDialog();
  }
});

let dialogBoxId = document.getElementById('dialogBox');

function showDialog() {
  dialogBoxId.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
    }
  });
  dialogBoxId.showModal();
}

function closeDialog() {
  dialogBoxId.close();
}


/* Створити клас AuthException, розширивши клас Error. В методі 
constructor(code, message) визначити властивість this.message, що дорівнює 
code: message або code, якщо message не передано як аргумент.*/

// class AuthException extends Error {
//   constructor(code, message) {
//     this.message 
//   }
  
//   toString() {
//     return this.message;
//   }
// }

/*Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth 
у файлі index.html.*/

/*За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. 
Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.*/

/*У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). 
Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток 
AuthException('FORBIDDEN', 'You don't have access to this page').*/

/*У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку 
у діалог dialogBoxId, відобразивши його у параграфі з класом ="message".*/

/*Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода 
window.open відкрити сторінку success.html.*/


