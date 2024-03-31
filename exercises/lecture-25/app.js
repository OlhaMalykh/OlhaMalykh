    /*  1  Маємо масив list */

const list = ['html', 'css', 'javascript', 'react.js'];

/* Використовуючи метод createElement, створити невпорядкований список 
на основі масиву list та вставити його на сторінку.*/

const ul = document.createElement('ul');

list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);




    //  2   Маємо масив listWithHref

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

/*Використовуючи метод createElement, створити впорядкований список на основі 
масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. 
Наприклад, для першого елемента списку:*/

//   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>

// Додайте створений список на сторінку.

const ol = document.createElement('ol');

listWithHref.forEach(item => {
    const web = Object.keys(item)[0];
    const link = item[web];
    
    const a = document.createElement('a');
    a.href = link;
    a.textContent = web;
    
    const li = document.createElement('li');
    li.appendChild(a);   
    ol.appendChild(li);
});

document.body.appendChild(ol);




    //  3   Маємо масив students

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

/*Використовуючи метод createElement, створити таблицю на основі масиву students. 
Заголовки стовпчиків таблиці - firstName, lastName, degree. 
Встановити для заголовків стовпчиків таблиці css-властивості: 
background-color: blue; color: azure; Додайте таблицю на сторінку.*/

const table = document.createElement('table');

const headerRow = document.createElement('tr');

const headers = ['firstName', 'lastName', 'degree'];

headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;

    th.style.backgroundColor = 'blue';
    th.style.color = 'azure';

    headerRow.appendChild(th);
});

table.appendChild(headerRow);

students.forEach(student => {
    const tr = document.createElement('tr');
    Object.values(student).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });

    table.appendChild(tr);
});

document.body.append(table);



