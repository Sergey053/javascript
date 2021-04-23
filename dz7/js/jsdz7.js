'use strict';
// 1
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
let fn = 1;
function oneObject(obj, from, to){
    let newObj = {};
    if (typeof obj !== 'object'|| typeof from !== 'number'|| typeof to !== 'number') { return false }
    for (let prop in obj){
        if (obj[prop].price > from && obj[prop].price < to) newObj[prop] = obj[prop];
    }
    return newObj;
}

;
console.log(oneObject(goods, 1000, 3000));

// 2

function twoObject(obj, title, count){
    let newObj = {};
    if (typeof obj !== 'object'|| typeof title !== 'string'|| typeof count !== 'number') { return false }
   
    for (let propName in obj){
        if (obj[propName].title === title) {
            if (obj[propName].count >= count) {
                obj[propName].count - count;
                return true;
            }
            return false;
        }
    }
};
    console.log(twoObject(goods, "Пианино", 15));

// 3
// Написать функцию, которая принимает на вход массив arr (например, books) и фамилию автора.
// Создает и возвращает  новый массив, в который войдут все книги указанного автора,
// если такого автора нет, возвращает пустой массив.





// 4
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];
  books.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  console.log(books);


//   3

let booksPro = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function oneAuthor(mass, author){
let newBooks = [];
for (let arg of mass){
    if (arg.author === author) return arg.title;
} return newBooks;
}
console.log(oneAuthor(books,'Пушкин'));
