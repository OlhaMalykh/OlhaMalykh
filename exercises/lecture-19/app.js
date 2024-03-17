
//1.    Маємо код
/*Чи мають рядки str1 та str2 однакову довжину.
 Перевірити на рівність (недбалу та строгу) рядки str1 та str2.*/
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

// Рядки str1 та str2 однакову довжину.
console.log(str1 == str2); //true
console.log(str1 === str2); //true



/* 2. Повернути перший символ рядка string5. 
Виконайте завдання, використовуючи індекс та метод charAt.*/
let string5 = 'Hello World';

    //1-й спосіб
let first1 = string5[0];
console.log(first1);

    //2-й спосіб
// let first1 = string5.charAt(0);
// console.log(first1);



//3. повернути символ J рядка str3:
/*let str3 = "Hello Javascript";

let symb = str3[6];
console.log(symb);*/



/*4. Використовуючи індекс, отримати доступ до останнього символу рядка 
двома способами*/
let str3 = "Hello Javascript";

    //1-й спосіб
let last = str3[str3.length - 1];
console.log(last);

    //2-й спосіб
// let last = str3.charAt(str3.length - 1);
// console.log(last);


// 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка

//1-й варіант
function lastChar(str) {
    return str[str.length - 1];
}
console.log(lastChar(str3));

//2-й варіант
function lastChar(str) {
    return str.charAt(str.length - 1);
}
console.log(lastChar(str3));

//3-й варіант
function lastChar(str) {
    return str.slice(-1);
}
console.log(lastChar(str3));



// 6. Маємо код

// let a = 'When candles are out, ';
// let b = 'all cats are grey.';

/*Використовуючи метод concat, вивести на консоль: 
When candles are out, all cats are grey*/

// let ab = a.concat(b);
// console.log(ab);



// 7. Маємо код

let fact = "Fifteen is the same as "
let a = 5;
let b = 10;

/*Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, 
щоб результат виглядав так: Fifteen is the same as 15*/

let str = fact + (a + b);
console.log(str);



//  8. Маємо код

let firstName = "Tom";
let lastName = "Cat";

// Напишіть функцію getFullName, що повертає результат: "Tom Cat"

function getFullName() {
    return (firstName + ' ' + lastName);
}
console.log(getFullName());

/*  9.  Напишіть функцію greeting, що використовує виклик 
функції getFullName та повертає такий результат: Hello, Tom Cat!*/

function greeting() {
    return "Hello, " + getFullName() + "!";
}
console.log(greeting());

/*   10.   Використовуючи функцію greeting, створити такий шаблон:
<div><h1>Hello, Tom Cat!</h1></div>*/

let template = "<div><h1>" + greeting() + "</h1></div>";
console.log(template);



//  11.    Маємо наступний код:

let string1 = "  The name of our game  ";
    // Потрібно отримати такі результати

    // "The name of our game"
let trimmedString1 = string1.trim();
console.log(trimmedString1);

    // "The name of our game  "
let trimmedStartString1 = string1.trimStart();
console.log(trimmedStartString1);

// "  The name of our game"
let trimmedEndString1 = string1.trimEnd();
console.log(trimmedEndString1);



const phoneNumber = '\t  555-123\n ';
    // Потрібно отримати такі результати

    // => '555-123'
const trimmedPhoneNumber = phoneNumber.trim();
console.log(trimmedPhoneNumber);

    // => '555-123 \n'
const trimmedStartPhoneNumber = phoneNumber.trimStart();
console.log(trimmedStartPhoneNumber);




//  12.     Маємо наступний код:
let sentence = 'Always look on the bright side of life';

    // Перевірити, чи містить рядок значення 'look up'
let containsLookUp = sentence.includes('look up');
console.log(containsLookUp);

    // Перевірити, чи містить рядок значення 'look on'
let containsLookOn = sentence.includes('look on');
console.log(containsLookOn);

    // Перевірити, чи містить рядок значення 'look on', починаючи з 8-ї позиції
let containsLookOnFromIndex = sentence.includes('look on', 8);
console.log(containsLookOnFromIndex);



//  13.  Маємо наступний код
// let sentence = 'Always look on the bright side of life';

    // Знайти індекс символу 'l'
let indexOfSmallL = sentence.indexOf("l");
console.log(indexOfSmallL);
    
    // Знайти індекс символу 'l', починаючи з 3-ї позиції
let indexOfSmallLPos = sentence.indexOf("l", 3);
console.log(indexOfSmallLPos);

    // Знайти індекс символу 'L'
let indexOfCapitalL = sentence.indexOf("L");
console.log(indexOfCapitalL);



//  14.     Маємо наступний код:
// let sentence = 'Always look on the bright side of life';

    // Отримати підрядок 'look on the bright side of life'
let subString1 = sentence.substring(7);
console.log(subString1);

    // Отримати підрядок 'Always'
let subString2 = sentence.substring(0, 6);
console.log(subString2);

    // Отримати підрядок 'look'
let subString3 = sentence.substring(7, 11);
console.log(subString3);



/*  15.     Створити регулярний вираз, який призначений для перевірки імені користувача, 
            що може містити цифри, літери у нижньому регістрі та символи - і _. 
            Довжину імені користувача встановити від 8 до 16 знаків.*/
let userNameRegex = /^[a-z0-9_-]{8,16}$/;



/*   16   Створити регулярний вираз, який призначений для перевірки email на коректність.*/
 let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;



//  17    Маємо наступний код:

let sentence1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

    /*Напишіть функцію truncateText скорочення тексту до 50 символів, 
    використовуючи метод substring*/
function truncateText() {
    return sentence1.substring(0,50);
}
console.log(truncateText());

    /*Напишіть функцію truncateText скорочення тексту до 50 символів, 
    використовуючи метод substr*/
function truncateText() {
    return sentence1.substr(0, 50);
}
console.log(truncateText());



