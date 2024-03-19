/*  1   Створити об'єкт person, що має властивості name з типом рядка 
та age з типом цілого числа. Надати значення цим властивостям. 
Вивести значення властивостей об'єкту на консоль*/

let person = {
    name: "David",
    age: 42,
}
console.log(
    person.name, 
    person.age
);



/*  2   Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. 
Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.*/

person.name = {
    firstName: "David",
    lastName: "Evans",
}
console.log(
    person.name.firstName, 
    person.name.lastName
);



//  3.  Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.

person.bio = function() {
    console.log(person.name.firstName);
    console.log(person.name.lastName);
    console.log(person.age);
}
person.bio();



//  4.  Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.

person.introduceSelf = function() {
    console.log("Hi! I'm " + person.name.firstName);
}
person.introduceSelf();



/*  5.  Створити функцію-шаблон createPerson, що приймає аргумент name 
та повертає новий об'єкт з властивістю name та методом introduceSelf. 
Створити за допомогою createPerson 2 екземпляри об'єкта.*/

function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
    console.log(`Hi! I'm ${this.name}`);
        }
    };
}

let person1 = createPerson("Mark");
let person2 = createPerson("Kate");

person1.introduceSelf();
person2.introduceSelf();



/*  6.    Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт 
з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри
 об'єкта mary та tom.*/

function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm  ${this.name}`);
  };
}

const mary = new Person("Mary");
const tom = new Person("Tom");

mary.introduceSelf();
tom.introduceSelf();

 // визначити, чи містить об'єкт mary властивість під назвою prop.
console.log(mary.hasOwnProperty("prop")); //false



/*  7.  
    Брудний мартіні – ідеальний коктейль для любителів оливкового. 
    Його можна приготувати на горілці чи джині за таким рецептом.

    ingredients:
        6 fluid ounces gin
        1 dash dry vermouth
        1 fluid ounce brine from olive jar
        4 stuffed green olives

fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів). 
Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() 

При виклику методу excuse_my_french(), на консоль виводиться:

      ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies

При виклику методу english_please(), на консоль виводиться:

      ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives
*/

const DirtyMartini = {
  ingredients: {
    gin: 6,
    vermouth: 1,
    brine: 1,
    olives: 4,
  },
  excuse_my_french() {
    console.log(`ingrédients:  
      ${this.ingredients.gin} ml de gin
      ${1} trait de vermouth sec (${0.0351951} ml) 
      ${this.ingredients.brine} ml de saumure du pot d'olive
      ${this.ingredients.olives} olives vertes farcies`);
  },
  english_please() {
    console.log(`ingredients:
      ${this.ingredients.gin} fluid ounces gin
      ${1} dash dry vermouth (${0.0351951} ml) 
      ${this.ingredients.brine} fluid ounce brine from olive jar
      ${this.ingredients.olives} stuffed green olives`);
  },
};

DirtyMartini.excuse_my_french();
DirtyMartini.english_please();


