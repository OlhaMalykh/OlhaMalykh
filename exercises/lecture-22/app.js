const classes = ['first', 'second', 'third', 'fourth'];


/*  1   Отримати всі елементи з тегом h1. Вивести на консоль 
тип отриманого об'єкту та його розмір. Використовуючи цикл for, 
вивести на консоль кожний елемент з отриманого об'єкту.*/

const h1Elements = document.getElementsByTagName('h1');

console.log('Тип об\'єкта:', typeof h1Elements);
console.log('Розмір об\'єкта:', h1Elements.length);

for (let i = 0; i < h1Elements.length; i++) {
    console.log('Елемент h1:', h1Elements[i]);
  }
  

/*  2   Отримати перший абзац за допомогою document.querySelector('#id') 
за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"*/

const firstParagraph = document.querySelector('#p1');

firstParagraph.style.backgroundColor = 'gold';


/*  3   Отримати другий абзац за допомогою document.querySelector('#id') 
за його ідентифікатором p2. Встановити для нього стилі 
background-color:gold; color: blue; font-size: 2rem;*/

const secondParagraph = document.querySelector('#p2');

secondParagraph.style.backgroundColor = 'gold';
secondParagraph.style.color = 'blue';
secondParagraph.style.fontSize = '2rem';


/*  4   Отримати третій абзац за допомогою document.querySelector('#id') 
за його ідентифікатором p3. Призначити для нього клас third*/

const thirdParagraph = document.querySelector('#p3');

thirdParagraph.classList.add('third');


/*  5   Отримати четвертий абзац за допомогою document.querySelector('#id') 
за його ідентифікатором p4. Призначити для нього класи fourth та border*/

const fourthParagraph = document.querySelector('#p4');

fourthParagraph.classList.add('fourth', 'border');


/*  6   Знайти всі елементи з класом container. Використовуючи цикл for, 
вивести на консоль перший елемент для кожного зі знайдених елементів.*/

const containers = document.getElementsByClassName('container');

for (let i = 0; i < containers.length; i++) {
  console.log('Перший елемент контейнера:', containers[i].firstElementChild);
}


/*  7   Знайти всі елементи з класом container. Використовуючи цикл for, 
вивести на консоль вміст першого елементу для кожного 
першого елемента зі знайдених елементів.*/

// const containers = document.getElementsByClassName('container');

for (let i = 0; i < containers.length; i++) {
    console.log('Вміст першого елемента контейнера:', containers[i].firstElementChild.textContent);
  }
  

  /*  8   Знайти колекцію всіх елементів з селектором '.container header', 
зберегти її в змінній headers. Використовуючи цикл for для 
отриманої колекції headers, замінити заголовки h1 таким чином

    - перший залишити h1
    - другий замінити на h2
    - третій замінити на h3
    - четвертий замінити на h4 зберегти початкові атрибути id та class
    */

const headers = document.querySelectorAll('.container header');

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const h1 = header.querySelector('h1');

  switch (i) {
    case 1:
      h1.outerHTML = '<h2>' + h1.innerHTML + '</h2>';
      break;
    case 2:
      h1.outerHTML = '<h3>' + h1.innerHTML + '</h3>';
      break;
    case 3:
      h1.outerHTML = '<h4>' + h1.innerHTML + '</h4>';
      break;
    default:
      break;
  }
}

/*Використовуючи цикл for для колекції headers та масив classes, 
додати до отриманих тегів-заголовків класи таким чином

    - до h1 додати клас first
    - до h2 додати клас second
    - до h3 додати клас third
    - до h4 додати клас fourth
*/

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const h1 = header.querySelector('h1, h2, h3, h4');
  h1.classList.add(classes[i]);
}

