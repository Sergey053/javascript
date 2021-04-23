'use strict';
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function createTable(arr) {

    

    let table = document.createElement("table");

    for (let i = 0; i < arr[0].length; i++) {
       let row = document.createElement("tr");
        for (let j = 0; j < arr.length; j++) {
            let column = document.createElement("td");
            let content = document.createTextNode(arr[j][i]);
            column.appendChild(content);
            row.appendChild(column);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
    }
    createTable(articles);