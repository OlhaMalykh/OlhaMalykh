
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

const waitingElement = document.getElementById('waiting');
const demoForm = document.getElementById('demoForm');
const demoElement = document.getElementById('demo');

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 10000));

  const formData = new FormData(demoForm);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');

  if (!firstName && !lastName) {
    waitingElement.textContent = 'I\'m miss You';
  } else {
    waitingElement.textContent = `Hello ${firstName} ${lastName}!`;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    const html = data.map(template).join('');
    demoElement.innerHTML = html;
  };
  xhr.send();
}

getData();


//  Технологія AJAX
/*  1    У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 
10 секунд, поки користувач заповнює поля форми. Після чого функція читає значення 
полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті. 
Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне 
зі значень заповнене, функція змінює контент h1 на Hello firstName lastName! */

/*  2    Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на 
веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send(). */

/*  Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує 
результат запиту з сервера, за допомогою JSON.parse перетворює результат на об'єкт, будує 
за допомогою шаблона template стрічку публікацій та поміщає отриманий результат всередину 
елемента з id="demo". */

