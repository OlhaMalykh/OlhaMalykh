// Маємо рядок fruits:

const fruits = 'apple banana cantaloupe blueberries grapefruit';

//  1   Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruitsArray = fruits.split(' ');
console.log(fruitsArray);

//  2   Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
console.log("Елементи масиву fruits (цикл for):");
for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}

//  3   Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
console.log("Елементи масиву fruits (цикл while):");
let j = 0;
while (j < fruitsArray.length) {
    console.log(fruitsArray[j]);
    j++;
}

//  4   Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
console.log("Елементи масиву fruits (цикл do...while):");
let k = 0;
do {
    console.log(fruitsArray[k]);
    k++;
} while (k < fruitsArray.length);

//  5   Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
console.log("Елементи масиву fruits (цикл for...of):");
for (let fruit of fruitsArray) {
    console.log(fruit);
}


//  6    Маємо масив Numbs.
const Numbs = [1,2,3,4,5,6,7,8,9,10];

// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
console.log("Парні елементи масиву Numbs:");
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}


//  7   Маємо масив names:
/*const names = ['Batman'];
// Додати 'Joker' в кінець масиву names:
names.push('Joker');
console.log(names);*/


//  8   Маємо масив names:
/*const names = ['Batman'];
// Додати 'Joker' на початок масиву names
names.unshift('Joker');
console.log(names);*/


//  9   Маємо масив names:
/*names = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names.unshift('Catwoman');
console.log(names);*/


//  10  Маємо масив names:
/*names = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names = ['Catwoman', ...names];
console.log(names);*/


//  11  Маємо масив names
/*names = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names.splice(1, 0, 'Catwoman');
console.log(names);*/


//  12  Маємо масив names
/*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
//Видалити елементи 'Catwoman' і 'Joker' з масиву names:
names.splice(1, 2);
console.log(names);*/


//  13  Маємо масив names:
/*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
names.splice(1, 2, 'Alfred');
console.log(names);*/


//  14  Маємо масив names:
/*const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
if (!names.includes('Alfred')) {
    names.push('Alfred');
}
console.log(names);*/


//  15  Маємо масив names:
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
//Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
if (names.includes('Alfred')) {
    names.splice(names.indexOf('Alfred'), 1);
}
console.log(names);



